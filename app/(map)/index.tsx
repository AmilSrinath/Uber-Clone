import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import { AntDesign } from "@expo/vector-icons";

const Map = () => {
		const [region, setRegion] = useState(null);
		const [routeCoordinates, setRouteCoordinates] = useState([]);
		const [endPoint, setEndPoint] = useState('');
		const [destination, setDestination] = useState(null);
		const [fare, setFare] = useState(null);

		useEffect(() => {
				(async () => {
						let { status } = await Location.requestForegroundPermissionsAsync();
						if (status !== 'granted') {
								console.error('Permission to access location was denied');
								return;
						}

						const location = await Location.getCurrentPositionAsync({});
						const { latitude, longitude } = location.coords;

						// Set the initial region to the user's current location
						setRegion({
								latitude,
								longitude,
								latitudeDelta: 0.01,
								longitudeDelta: 0.01,
						});
				})();
		}, []);

		const handleSearch = async () => {
				if (!endPoint) return;

				try {
						const geocodeResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(endPoint)}&key=AIzaSyCCf0t_Og7S4yIo4eze36bJPoo1-cxw0O0`);
						const geocodeData = await geocodeResponse.json();
						if (geocodeData.results.length > 0) {
								const { lat, lng } = geocodeData.results[0].geometry.location;
								setDestination({ latitude: lat, longitude: lng });

								const directionsResponse = await fetch(
										`https://maps.googleapis.com/maps/api/directions/json?origin=${region.latitude},${region.longitude}&destination=${lat},${lng}&mode=driving&key=AIzaSyCCf0t_Og7S4yIo4eze36bJPoo1-cxw0O0`
								);
								const directionsData = await directionsResponse.json();

								if (directionsData.routes.length > 0) {
										const route = directionsData.routes[0];
										const points = decodePolyline(route.overview_polyline.points);
										setRouteCoordinates(points);

										// Extract distance in meters and calculate fare
										const distanceInMeters = route.legs.reduce((sum, leg) => sum + leg.distance.value, 0);
										const distanceInKm = distanceInMeters / 1000; // Convert to km
										const calculatedFare = distanceInKm * 150; // Calculate fare (LKR 150 per km)

										setFare(calculatedFare.toFixed(2)); // Round to 2 decimal places
								} else {
										console.error('No route found.');
								}
						} else {
								console.error('No results found for the entered location.');
						}
				} catch (error) {
						console.error('Error fetching data:', error);
				}
		};

		const decodePolyline = (encoded) => {
				let points = [];
				let index = 0;
				let lat = 0;
				let lng = 0;

				while (index < encoded.length) {
						let b, shift = 0, result = 0;
						do {
								b = encoded.charCodeAt(index++) - 63;
								result |= (b & 0x1f) << shift;
								shift += 5;
						} while (b >= 0x20);
						let dlat = (result & 1) ? ~(result >> 1) : (result >> 1);
						lat += dlat;

						shift = 0;
						result = 0;
						do {
								b = encoded.charCodeAt(index++) - 63;
								result |= (b & 0x1f) << shift;
								shift += 5;
						} while (b >= 0x20);
						let dlng = (result & 1) ? ~(result >> 1) : (result >> 1);
						lng += dlng;

						points.push({
								latitude: lat / 1e5,
								longitude: lng / 1e5,
						});
				}
				return points;
		};

		return (
				<View style={styles.container}>
						<View style={styles.searchContainer}>
								<AntDesign name="search1" size={20} color='#000' />
								<TextInput
										placeholder="Enter end point?"
										style={styles.endInput}
										value={endPoint}
										onChangeText={setEndPoint}
										onSubmitEditing={handleSearch}
								/>
								<TouchableOpacity onPress={handleSearch}>
										<AntDesign name="arrowright" size={20} color='#000' />
								</TouchableOpacity>
						</View>

						{fare && (
								<View style={styles.fareContainer}>
										<Text style={styles.fareText}>Estimated Fare: LKR {fare}</Text>
								</View>
						)}

						{region && (
								<MapView
										style={styles.map}
										region={region}
								>
										{routeCoordinates.length > 0 && (
												<Marker
														coordinate={routeCoordinates[0]}
														title="Start Point"
												/>
										)}
										{destination && (
												<Marker coordinate={destination} title="Destination" />
										)}
										{routeCoordinates.length > 0 && (
												<Polyline coordinates={routeCoordinates} strokeColor="blue" strokeWidth={3} />
										)}
								</MapView>
						)}
				</View>
		);
};

const styles = StyleSheet.create({
		container: {
				flex: 1,
		},
		searchContainer: {
				flexDirection: 'row',
				alignItems: 'center',
				backgroundColor: '#fff',
				padding: 10,
				borderRadius: 10,
				margin: 10,
				position: 'absolute',
				top: 10,
				left: 10,
				right: 10,
				zIndex: 1,
		},
		map: {
				width: '100%',
				height: '100%',
		},
		endInput: {
				flex: 1,
				fontSize: 18,
				marginLeft: 10,
				color: '#000',
		},
		fareContainer: {
				position: 'absolute',
				bottom: 10,
				left: 10,
				right: 10,
				backgroundColor: '#fff',
				padding: 10,
				borderRadius: 10,
				alignItems: 'center',
		},
		fareText: {
				fontSize: 18,
				fontWeight: 'bold',
		},
});

export default Map;
