import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

export default function Service() {
		return (
				<ScrollView style={styles.container}>
						<Text style={styles.title}>Services</Text>
						<Text style={styles.subtitle}>Go anywhere, get anything</Text>
						<View style={styles.menu}>
								<View style={styles.buttonWithPromoContainer}>
										<TouchableOpacity style={styles.menuButton_1}>
												<Image style={styles.ButtonsImage} source={{ uri: 'https://img.lovepik.com/element/40023/7161.png_300.png' }}/>
												<Text style={styles.menuText}>Trip</Text>
										</TouchableOpacity>
										<Text style={styles.promo}>Promo</Text>
								</View>

								<TouchableOpacity style={styles.menuButton_1}>
										<Image style={styles.ButtonsImage} source={{ uri: 'https://png.pngtree.com/element_our/sm/20180515/sm_f7b6c861bd80a6dfd15d04c4919ff73e.jpg' }}/>
										<Text style={styles.menuText}>Food</Text>
								</TouchableOpacity>

								<TouchableOpacity style={styles.menuButton_1}>
										<Image style={styles.ButtonsImage} source={{ uri: 'https://image.similarpng.com/thumbnail/2020/06/Tuk-tuk-car-illustration-royalty-free-PNG.png' }}/>
										<Text style={styles.menuText}>Tuk</Text>
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
				</ScrollView>
		);
}

const styles = StyleSheet.create({
		container: {
				flex: 1,
				backgroundColor: '#fff',
				padding: 10,
		},
		menu: {
				flexDirection: 'row',
				justifyContent: 'space-around',
				marginBottom: 20,
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
		title: {
				fontSize: 26,
				fontWeight: 'bold',
				marginTop: 50,
				margin: 10
		},
		subtitle: {
				fontSize: 16,
				fontWeight: 'bold',
				marginLeft: 10,
				marginBottom: 20,
				marginTop: 50
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
		}
});
