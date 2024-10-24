import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
		const colorScheme = useColorScheme();

		return (
				<Tabs
						screenOptions={{
								tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
								headerShown: false,
						}}>
						<Tabs.Screen
								name="index"
								options={{
										title: 'Home',
										tabBarIcon: ({ color, focused }) => (
												<Ionicons
														name={focused ? 'home' : 'home-outline'}
														size={24}
														color={color}
												/>
										),
								}}
						/>
						<Tabs.Screen
								name="service"
								options={{
										title: 'Service',
										tabBarIcon: ({ color, focused }) => (
												<Ionicons
														name={focused ? 'apps' : 'apps-outline'}
														size={24}
														color={color}
												/>
										),
								}}
						/>
						<Tabs.Screen
								name="activity"
								options={{
										title: 'Activity',
										tabBarIcon: ({ color, focused }) => (
												<Ionicons
														name={focused ? 'bookmark' : 'bookmark-outline'}
														size={24}
														color={color}
												/>
										),
								}}
						/>
						<Tabs.Screen
								name="account"
								options={{
										title: 'Account',
										tabBarIcon: ({ color, focused }) => (
												<Ionicons
														name={focused ? 'person' : 'person-outline'}
														size={24}
														color={color}
												/>
										),
								}}
						/>
				</Tabs>
		);
}
