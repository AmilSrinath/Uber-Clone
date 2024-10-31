import React from 'react';
import {Button, SafeAreaView, Text} from "react-native";
import { useRouter } from 'expo-router';

function Index() {
		const router = useRouter();

		const handleLogin = () => {
				router.replace('/(tabs)')
		};

		return (
				<SafeAreaView>
						<Text>Login</Text>
						<Button title="Login" onPress={handleLogin} />
				</SafeAreaView>
		);
}

export default Index;