import React, { useState } from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Image, Button} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from "expo-router";

export default function HomeScreen() {
		const [modalVisible, setModalVisible] = useState(false); // To control modal visibility
		const [selectedTime, setSelectedTime] = useState('Now');  // To store selected time option
		const navigation = useNavigation();

		const handleSelection = (option: React.SetStateAction<string>) => {
				setSelectedTime(option);
				setModalVisible(false);  // Close modal after selecting
		};

		const rideItems = [
				{ id: 1, name: 'Book Premier', description: "Extra comfort for special days", image: 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/09/shutterstock_2509903933.jpg' },
				{ id: 2, name: 'Reserve your ride', description: "Reliable airport trips", image: 'https://media.licdn.com/dms/image/C5612AQFAexY0gkDWTg/article-cover_image-shrink_720_1280/0/1618205986626?e=2147483647&v=beta&t=ygPpjQknV9KOgi3Iy9eX5XohZWlDM1ZCYW5_MpCg-9A' },
				{ id: 3, name: 'Book Intercity', description: "Travel outstation with ease", image: 'https://procoders.tech/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/01/How-to-Create-an-Uber-like-App-for-Trucks.png.webp' },
		];

		const headOutItems = [
				{ id: 1, name: 'Add multiple stops', description: "As your travel plans evolve", image: 'https://cdn.sanity.io/images/bl383u0v/production/aa784417a31049fcb1eb2ccd07b5b025a8b59464-1024x615.png' },
				{ id: 2, name: 'Request Intercity', description: "Travel outstation effortlessly", image: 'https://9to5mac.com/wp-content/uploads/sites/6/2023/06/Uber.jpg?quality=82&strip=all&w=1600' },
				{ id: 3, name: 'Take a round trip', description: "Hassle free return trips", image: 'https://dianapps.com/blog/wp-content/uploads/2022/12/1080600.png' },
				{ id: 4, name: 'Pre-book your trip', description: "For now or for later", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tPLPdy2hPapOtBtfOABuzt1eoPA2ObRj79RbvMd-0GhpEGglz8CsDJFnFB0eHSTKsHk&usqp=CAU' },
		];

		const elevateYourRide = [
				{ id: 1, name: 'Request User XL', description: "Spacious comfortable SUV rides", image: 'https://helios-i.mashable.com/imagery/articles/01TnMngJLo1O9vkCXogV5zC/hero-image.fill.size_1248x702.v1677022408.png' },
				{ id: 2, name: 'Request Premier', description: "Ride with top-rated drivers", image: 'https://cdn.dribbble.com/users/2593544/screenshots/16026900/media/50074c9c6d371db9c4e2891d308b52a2.png' },
		];

		const handleNext = () => {
				setModalVisible(false);
				navigation.navigate('PlanYourTrip');
		};

		return (
				<ScrollView style={styles.background}>
						<View style={styles.searchContainer}>
								<AntDesign name="search1" size={20} color='#000' />
								<TextInput placeholder="Enter pick-up point?" style={styles.searchInput} />
								<TouchableOpacity style={styles.timeButton} onPress={() => setModalVisible(true)}>
										<AntDesign name="clockcircle" size={16} color='#000' />
										<TextInput style={styles.timeText}>Now</TextInput>
										<AntDesign name="down" size={16} color='#000' />
								</TouchableOpacity>

								<Modal visible={modalVisible} transparent={true} animationType="slide">
										<TouchableOpacity style={styles.modalContainer} onPress={() => handleSelection(selectedTime)}>
												<View style={styles.modalContent}>
														<Text style={styles.modalTitle}>When do you need a trip?</Text>

														{/* Option: Now */}
														<TouchableOpacity style={styles.option} onPress={() => setModalVisible(false)}>
																<AntDesign name="clockcircle" size={24} color="#000" />
																<View style={styles.optionTextContainer}>
																		<Text style={styles.optionText}>Now</Text>
																		<Text style={styles.optionSubText}>Request a trip, hop in and go</Text>
																</View>
														</TouchableOpacity>

														{/* Option: Later */}
														<TouchableOpacity style={styles.option} onPress={() => handleSelection('Later')}>
																<AntDesign name="calendar" size={24} color="#000" />
																<View style={styles.optionTextContainer}>
																		<Text style={styles.optionText}>Later</Text>
																		<Text style={styles.optionSubText}>Reserve for extra peace of mind</Text>
																</View>
														</TouchableOpacity>

														<TouchableOpacity style={styles.modalButton} onPress={handleNext}>
																<Text style={styles.modalButtonText}>Next</Text>
														</TouchableOpacity>
												</View>
										</TouchableOpacity>
								</Modal>
						</View>

						<TouchableOpacity style={styles.addView}>
								<Image style={styles.addImg} source={{ uri: 'https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2024/05/SPU-banner.png' }} />
						</TouchableOpacity>

						<View style={styles.topicView}>
								<Text style={styles.topic}>Suggestions</Text>
								<TouchableOpacity style={styles.button}>
										<Text>See all</Text>
								</TouchableOpacity>
						</View>

						<View style={styles.menu}>
								<TouchableOpacity style={styles.menuButton_2}>
										<Image style={styles.ButtonsImage} source={{ uri: 'https://img.lovepik.com/element/40023/7161.png_300.png' }}/>
										<Text style={styles.menuText}>Intercity</Text>
								</TouchableOpacity>

								<TouchableOpacity style={styles.menuButton_2}>
										<Image style={styles.ButtonsImage} source={{ uri: 'https://img.lovepik.com/element/40024/4399.png_300.png' }}/>
										<Text style={styles.menuText}>Reserve</Text>
								</TouchableOpacity>

								<View style={styles.buttonWithPromoContainer}>
										<TouchableOpacity style={styles.menuButton_2}>
												<Image style={styles.ButtonsImage} source={{ uri: 'https://img.lovepik.com/free-png/20220126/lovepik-rhino-modeling-a-sports-car-png-image_401791288_wh300.png' }}/>
												<Text style={styles.menuText}>Rentals</Text>
										</TouchableOpacity>
										<Text style={styles.promo}>Promo</Text>
								</View>

								<TouchableOpacity style={styles.menuButton_2}>
										<Image style={styles.ButtonsImage} source={{ uri: 'https://img.lovepik.com/element/45004/5431.png_860.png' }}/>
										<Text style={styles.menuText}>Package</Text>
								</TouchableOpacity>
						</View>

						<View style={styles.topicView}>
								<Text style={styles.topic}>Ride as your like it</Text>
						</View>

						<View style={styles.container}>
								<ScrollView horizontal showsHorizontalScrollIndicator={false}>
										{rideItems.map(item => (
												<TouchableOpacity key={item.id} style={styles.itemContainer} onPress={() => console.log(`Clicked on ${item.id}`)}>
														<Image source={{ uri: item.image }} style={styles.image} />
														<Text style={styles.itemName}>{item.name}</Text>
														<Text style={styles.itemDescription}>{item.description}</Text>
												</TouchableOpacity>
										))}
								</ScrollView>
						</View>

						<TouchableOpacity style={styles.addView}>
								<Image style={styles.addImg} source={{ uri: 'https://blog.uber-cdn.com/cdn-cgi/image/width=1414,quality=80,onerror=redirect,format=auto/wp-content/uploads/2021/12/Screenshot-2021-12-14-at-1.19.12-PM.png' }} />
						</TouchableOpacity>


						<View style={styles.topicView}>
								<Text style={styles.topic}>Head out of town</Text>
						</View>

						<View style={styles.container}>
								<ScrollView horizontal showsHorizontalScrollIndicator={false}>
										{headOutItems.map(item => (
												<TouchableOpacity key={item.id} style={styles.itemContainer} onPress={() => console.log(`Clicked on ${item.id}`)}>
														<Image source={{ uri: item.image }} style={styles.image} />
														<Text style={styles.itemName}>{item.name}</Text>
														<Text style={styles.itemDescription}>{item.description}</Text>
												</TouchableOpacity>
										))}
								</ScrollView>
						</View>

						<View style={styles.topicView}>
								<Text style={styles.topic}>Elevate your ride</Text>
						</View>

						<View style={styles.container}>
								<ScrollView horizontal showsHorizontalScrollIndicator={false}>
										{elevateYourRide.map(item => (
												<TouchableOpacity key={item.id} style={styles.itemContainer} onPress={() => console.log(`Clicked on ${item.id}`)}>
														<Image source={{ uri: item.image }} style={styles.image} />
														<Text style={styles.itemName}>{item.name}</Text>
														<Text style={styles.itemDescription}>{item.description}</Text>
												</TouchableOpacity>
										))}
								</ScrollView>
						</View>

				</ScrollView>
		);
}

const styles = StyleSheet.create({
		searchContainer: {
				flexDirection: "row",
				alignItems: "center",
				backgroundColor: "#E4E0E1",  // Lighter background color
				borderRadius: 30,  // More rounded corners
				paddingHorizontal: 15,  // Horizontal padding for the content inside
				paddingVertical: 10,  // Vertical padding for the search bar height
				marginBottom: 20,
				width: '90%',
				alignSelf: 'center',  // Center the search bar on the screen
				justifyContent: 'space-between',  // Space between the search and the button
				marginTop: 50,
		},
		searchInput: {
				fontSize: 18,
				flex: 1,
				marginLeft: 10,
				color: '#000',  // Text color to ensure readability
		},
		timeButton: {
				flexDirection: 'row',
				alignItems: 'center',
				backgroundColor: '#fff',  // Different background color for the "Now" button
				borderRadius: 20,  // Round corners for the button
				paddingVertical: 5,
				paddingHorizontal: 15,
		},
		timeText: {
				marginLeft: 10,
				fontSize: 16,
				marginRight: 5,  // Space between text and icon
				color: '#000',
		},
		modalContainer: {
				flex: 1,
				backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent background
		},
		modalContent: {
				backgroundColor: '#fff',
				padding: 20,
				borderRadius: 10,
				top: 590
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
		modalButton: {
				backgroundColor: '#000',
				paddingVertical: 15,
				borderRadius: 10,
				marginTop: 20,
		},
		modalButtonText: {
				color: '#fff',
				textAlign: 'center',
				fontSize: 16,
				fontWeight: 'bold',
		},
		addImg: {
				width: '90%',
				height: 150,
				borderRadius: 20
		},
		addView: {
				alignItems: 'center',

		},
		background: {
				backgroundColor: '#fff',
		},
		topic: {
				fontSize: 24,
				margin: 20,
				fontWeight: 'bold',
		},
		topicView: {
				flexDirection: 'row',
				alignItems: 'center',
		},
		button: {
				borderRadius: 20,
				marginLeft: 170
		},
		menu: {
				flexDirection: 'row',
				justifyContent: 'space-around',
				marginBottom: 10,
				marginLeft: 10,
				marginRight: 10,
		},
		menuButton_1: {
				width: 100,
				height: 90,
				backgroundColor: '#f3f3f3',
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: 8,
				marginLeft: 4,
				marginRight: 4
		},
		menuButton_2: {
				width: 80,
				height: 80,
				backgroundColor: '#f3f3f3',
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: 8,
				marginLeft: 4,
				marginRight: 4
		},
		menuText: {
				marginTop: 4,
				fontSize: 13,
		},
		ButtonsImage: {
				width: 50,
				height: 30,
		},
		promo: {
				fontSize: 10,
				backgroundColor: '#0f8e00',
				color: '#fff',
				textAlign: 'center',
				borderRadius: 8,
				paddingHorizontal: 4,
				paddingVertical: 2,
				position: 'absolute',
				top: -12, // Adjust this based on how you want it positioned
				left: '35%', // Adjust this based on centering the promo
				zIndex: 1,
		},
		buttonWithPromoContainer: {
				position: 'relative',
				alignItems: 'center',
		},
		container: {
				marginHorizontal: 20,
				marginBottom: 40
		},
		title: {
				fontSize: 18,
				fontWeight: 'bold',
				marginBottom: 10,
		},
		itemContainer: {
				marginRight: 15,
		},
		image: {
				width: 200,
				height: 120,
				borderRadius: 10,
		},
		itemName: {
				marginTop: 5,
				fontSize: 14,
				fontWeight: '500',
		},
		itemDescription: {
				fontSize: 14,
				color: '#758694'
		}

});
