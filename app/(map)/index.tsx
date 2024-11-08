import React, { useState, useEffect } from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View, Text, Modal, Image, ActivityIndicator} from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import { AntDesign } from "@expo/vector-icons";
import {useRouter} from "expo-router";

const Map = () => {
		const [region, setRegion] = useState(null);
		const [routeCoordinates, setRouteCoordinates] = useState([]);
		const [endPoint, setEndPoint] = useState('');
		const [destination, setDestination] = useState(null);
		const [fare, setFare] = useState(null);
		const [loadingLocation, setLoadingLocation] = useState(true);

		const [modalVisible, setModalVisible] = useState(false); // To control modal visibility
		const [selectedTime, setSelectedTime] = useState('Now');  // To store selected time option

		useEffect(() => {
				(async () => {
						let { status } = await Location.requestForegroundPermissionsAsync();
						if (status !== 'granted') {
								console.error('Permission to access location was denied');
								return;
						}

						try {
								const location = await Location.getCurrentPositionAsync({});
								const { latitude, longitude } = location.coords;

								setRegion({
										latitude,
										longitude,
										latitudeDelta: 0.01,
										longitudeDelta: 0.01,
								});
						} catch (error) {
								console.error('Error fetching location:', error);
						} finally {
								setLoadingLocation(false);
						}
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

										setFare(distanceInKm.toFixed(1)); // Round to 2 decimal places
								} else {
										console.error('No route found.');
								}
						} else {
								console.error('No results found for the entered location.');
						}
				} catch (error) {
						console.error('Error fetching data:', error);
				}
				setModalVisible(true); // Open the modal after search
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

		const router = useRouter();

		const handleSelection = (option) => {
				setSelectedTime(option);

				router.push('/(searchVehical)');

				setModalVisible(false);  // Close modal after selecting
		};

		return (
				<View style={styles.container}>

						{loadingLocation && (
								<View style={styles.loadingContainer}>
										<ActivityIndicator size="large" color="#0000ff" />
										<Text>Loading location...</Text>
								</View>
						)}
						{/* Modal for Time Selection */}
						<Modal visible={modalVisible} transparent={true} animationType="slide">
								<TouchableOpacity style={styles.modalContainer} onPress={() => setModalVisible(false)}>
										<View style={styles.modalContent}>
												<Text style={styles.cancelButton}>Cancel</Text>
												<Text style={styles.modalTitle}>When do you need a trip?</Text>

												{/* Option: Now */}
												<TouchableOpacity style={styles.option} onPress={() => handleSelection('Now')}>
														<Image style={styles.vehicalImg} source={{ uri: 'https://img.freepik.com/premium-vector/tuk-tuk-vector-illustration_927344-49461.jpg' }}/>
														<View style={styles.optionTextContainer}>
																<View style={styles.nameAndPrice}>
																		<Text style={styles.optionText}>Tuk</Text>
																		<Text style={styles.optionTextPrice}>LKR {fare * 100}.00</Text>
																</View>
																<Text style={styles.optionSubText}>7:56 PM</Text>
																<Text style={styles.optionSubText}>Longer wait</Text>
														</View>
												</TouchableOpacity>

												{/* Option: Later */}
												<TouchableOpacity style={styles.option} onPress={() => handleSelection('Later')}>
														<Image style={styles.vehicalImg} source={{ uri: 'https://img.freepik.com/free-vector/hand-drawn-sedan-car-illustration_53876-34797.jpg?semt=ais_hybrid' }}/>
														<View style={styles.optionTextContainer}>
																<View style={styles.nameAndPrice}>
																		<Text style={styles.optionText}>Car</Text>
																		<Text style={styles.optionTextPrice}>LKR {fare * 150}.00</Text>
																</View>
																<Text style={styles.optionSubText}>7:56 PM</Text>
																<Text style={styles.optionSubText}>Longer wait</Text>
														</View>
												</TouchableOpacity>

												{/* Option: Later */}
												<TouchableOpacity style={styles.option} onPress={() => handleSelection('Later')}>
														<Image style={styles.vehicalImg} source={{ uri: 'https://png.pngtree.com/png-clipart/20220302/original/pngtree-van-vector-png-image_7361659.png' }}/>
														<View style={styles.optionTextContainer}>
																<View style={styles.nameAndPrice}>
																		<Text style={styles.optionText}>Van</Text>
																		<Text style={styles.optionTextPrice}>LKR {fare * 200}.00</Text>
																</View>
																<Text style={styles.optionSubText}>7:56 PM</Text>
																<Text style={styles.optionSubText}>Longer wait</Text>
														</View>
												</TouchableOpacity>

												<View style={styles.continueButtonContainer}>
														<TouchableOpacity style={styles.continueButton}>
																<Text style={styles.continueButtonText}>Continue</Text>
														</TouchableOpacity>
												</View>

										</View>
								</TouchableOpacity>
						</Modal>

						{/* Search Container */}
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

						{!loadingLocation && region && (
								<MapView
										style={styles.map}
										region={region}
										showsUserLocation={false} // Disable default user location marker
								>
										{region && (
												<Marker
														coordinate={{ latitude: region.latitude, longitude: region.longitude }}
														title="You are here"
												>
														<Image
																source={{uri: 'https://cdn-icons-png.flaticon.com/128/3138/3138667.png'}}
																style={styles.humanIcon}
														/>
												</Marker>
										)}

										{destination && (
												<Marker
														coordinate={destination}
														title="Destination"
												>
														<Image
																source={{ uri: 'https://cdn-icons-png.flaticon.com/128/450/450016.png' }} // Replace this URI with your desired icon for the destination
																style={styles.destinationIcon}
														/>
												</Marker>
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
		modalContainer: {
				flex: 1,
				justifyContent: 'center',
				backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent background
				top: 500,
				alignItems: 'center',
		},
		modalContent: {
				backgroundColor: '#fff',
				padding: 20,
				borderRadius: 10,
				marginHorizontal: 30,
				width: 392,
				height: 1100
		},
		modalTitle: {
				fontSize: 18,
				fontWeight: 'bold',
				marginBottom: 20,
		},
		option: {
				flexDirection: 'row',
				alignItems: 'center',
				marginVertical: 10,
		},
		optionTextContainer: {
				marginLeft: 10,
		},
		optionText: {
				fontSize: 16,
				fontWeight: 'bold',
		},
		optionSubText: {
				fontSize: 14,
				color: '#777',
		},
		cancelButton: {
				position: 'absolute',
				margin: 10,
				right: 5,
				color: '#0000FF'
		},
		vehicalImg: {
				width: 80,
				height: 80,
		},
		nameAndPrice: {
				flexDirection: 'row',
		},
		optionTextPrice: {
				fontSize: 16,
				fontWeight: 'bold',
				marginLeft: 130
		},
		continueButton: {
				backgroundColor: '#000',
				borderRadius: 10,
				width: '90%',
				height: 40,
				alignItems: 'center',
				marginTop: 40,
		},
		continueButtonContainer: {
				alignItems: 'center',
				justifyContent: 'center',
		},
		continueButtonText: {
				color: '#fff',
				textAlign: 'center',
				fontSize: 16,
				top: 10
		},
		loadingContainer: {
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
		},
		humanIcon: {
				width: 25, // Adjust size as needed
				height: 25, // Adjust size as needed
				resizeMode: 'contain', // Ensure the icon is properly scaled
		},
		destinationIcon: {
				width: 25, // Adjust size as needed
				height: 25, // Adjust size as needed
				resizeMode: 'contain', // Ensure the icon is properly scaled
				top: -11,
				right: 3
		},
});

export default Map;
