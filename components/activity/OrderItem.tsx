import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface OrderItemProps {
		restaurant: string;
		orderDetails: string;
		price: string;
		onPress: () => void;
}

const OrderItem: React.FC<OrderItemProps> = ({ restaurant, orderDetails, price, onPress }) => {
		return (
				<TouchableOpacity style={styles.orderContainer}>
						<Image style={styles.image} source={{ uri: 'https://img.lovepik.com/element/40023/7161.png_300.png' }} />
						<View style={styles.textContainer}>
								<Text style={styles.restaurant}>{restaurant}</Text>
								<Text style={styles.orderDetails}>{orderDetails}</Text>
								<Text style={styles.price}>{price}</Text>
						</View>
						<TouchableOpacity style={styles.button} onPress={onPress}>
								<View style={styles.iconButtonContainer}>
										<Icon name="repeat" size={20} color="#000" />
										<Text style={styles.buttonText}>Reorder</Text>
								</View>
						</TouchableOpacity>
				</TouchableOpacity>
		);
};

const styles = StyleSheet.create({
		orderContainer: {
				flexDirection: 'row',
				alignItems: 'center',
				padding: 15,
				borderBottomWidth: 1,
				borderBottomColor: '#E4E0E1',
				justifyContent: 'space-between',
		},
		image: {
				width: 50,
				height: 50,
				marginRight: 15,
		},
		textContainer: {
				flex: 1,
				marginLeft: 10,
		},
		restaurant: {
				fontWeight: 'bold',
				fontSize: 14,
		},
		orderDetails: {
				fontSize: 12,
				color: '#777',
		},
		price: {
				fontSize: 12,
				color: '#777',
		},
		button: {
				flexDirection: 'row',
				backgroundColor: '#E4E0E1',
				paddingVertical: 7,
				paddingHorizontal: 10,
				borderRadius: 20,
				alignItems: 'center',
		},
		iconButtonContainer: {
				flexDirection: 'row',
				alignItems: 'center',
		},
		buttonText: {
				color: '#000000',
				fontSize: 12,
				marginLeft: 5,  // Space between icon and text
		},
});

export default OrderItem;
