import React from 'react';
import { ScrollView, Text, StyleSheet, View, TouchableOpacity, Image, Button } from "react-native";
import OrderItem from "@/components/activity/OrderItem";

export default function Activity() {
		return (
				<ScrollView>
						<Text style={styles.title}>Activity</Text>
						<OrderItem
								restaurant="Chopsticks"
								orderDetails="01 Nov - 18:42"
								price="LKR 939.00"
								onPress={() => { console.log('Reorder Chopsticks'); }}
						/>

						<OrderItem
								restaurant="New Lakrasa Caterers"
								orderDetails="03 Nov - 17:35"
								price="LKR 721.50"
								onPress={() => { console.log('Reorder New Lakrasa Caterers'); }}
						/>

						<OrderItem
								restaurant="290 Madupitiya"
								orderDetails="06 Nov - 010:17"
								price="LKR 0.00 - Cancelled"
								onPress={() => { console.log('Rebook 290 Madupitiya'); }}
						/>
				</ScrollView>
		);
}

const styles = StyleSheet.create({
		title: {
				fontSize: 30,
				marginTop: 50,
				margin: 20,
				fontWeight: 'bold',
		},
		image: {
				width: 60,
				height: 60,
				marginRight: 15,
		},
		orderContainer: {
				flexDirection: 'row',
				alignItems: 'center',
				padding: 20,
				borderBottomWidth: 1,
				borderBottomColor: '#ccc',
				justifyContent: 'space-between',
		},
		textContainer: {
				flex: 1,
				marginLeft: 10,
		},
		restaurant: {
				fontWeight: 'bold',
				fontSize: 16,
				marginBottom: 5,
		},
		orderDetails: {
				fontSize: 14,
				color: '#777',
		},
		price: {
				fontSize: 14,
				fontWeight: 'bold',
		},
});
