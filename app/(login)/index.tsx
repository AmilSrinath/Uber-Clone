import React, {useState} from 'react';
import {
		Button,
		Image,
		KeyboardAvoidingView,
		SafeAreaView,
		StyleSheet,
		Text,
		TextInput,
		TouchableOpacity,
		View
} from "react-native";
import { useRouter } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import * as Google from 'expo-auth-session/providers/google';
import {FIREBASE_AUTH} from "@/config/FirebaseConfig";
import {async} from "@firebase/util";
import {logError} from "@react-native-community/cli-doctor/build/tools/healthchecks/common";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@firebase/auth";

export default function Index() {
		const router = useRouter();

		const [request, response, promptAsync] = Google.useAuthRequest({
				clientId: '233840716514-dem8d64kcuhasbnjbu6gpeaod7n0cuio.apps.googleusercontent.com', // replace with your Google OAuth client ID
		});

		const auth = FIREBASE_AUTH;

		const [email, setEmail] = useState('');
		const [password, setPassword] = useState('');

		const signIn = async () => {
				try {
						const response = await signInWithEmailAndPassword(auth, email, password);
						router.replace('/(tabs)')
						console.log(response);
				}catch (error){
						console.log(error);
						alert("Please check email and password");
				}
		};

		const signUp = async () => {
				router.replace('/(signup)');
		}

		return (
				<SafeAreaView>
						<KeyboardAvoidingView behavior="padding">
								<Text style={style.title}>Let's get started</Text>
								{/*<Button title="Login" onPress={handleLogin} />*/}

								{/*<View style={style.countrySelection}>*/}
								{/*		<TouchableOpacity style={style.numberButton}>*/}
								{/*				<Image style={style.buttonImg} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/1200px-Flag_of_Sri_Lanka.svg.png' }}/>*/}
								{/*				<AntDesign name="caretdown" size={10} color="black" />*/}
								{/*		</TouchableOpacity>*/}
								{/*		<TextInput style={style.phoneEnter}>  +94</TextInput>*/}
								{/*</View>*/}

								<View style={style.textInput}>
										<TextInput
												style={style.username}
												placeholder={"Your Email"}
												autoCapitalize="none"
												keyboardType="email-address"
												onChangeText={setEmail} // Update email state
										/>
										<TextInput
												style={style.username}
												placeholder={"Your Password"}
												secureTextEntry
												onChangeText={setPassword} // Update password state
										/>
								</View>

								<View style={style.continueButtonContainer}>
										<TouchableOpacity style={style.continueButton} onPress={signIn}>
												<Text style={style.continueButtonText}>Sing in</Text>
										</TouchableOpacity>
								</View>

								<View style={style.buttonContainer}>
										<View style={style.devider}>
												<Text style={style.deviderOtherText}>______________________</Text>
												<Text style={style.deviderText}> or </Text>
												<Text style={style.deviderOtherText}>______________________</Text>
										</View>

										<TouchableOpacity style={style.button} onPress={() => promptAsync()}>
												<AntDesign name="google" size={24} color="black" />
												<Text style={style.buttonText}>Continue with Google</Text>
										</TouchableOpacity>

										<TouchableOpacity style={style.button}>
												<AntDesign name="mobile1" size={24} color="black" />
												<Text style={style.buttonText}>Continue with Mobile</Text>
										</TouchableOpacity>

										<TouchableOpacity style={style.button}>
												<MaterialIcons name="email" size={24} color="black" />
												<Text style={style.buttonText}>Continue with email</Text>
										</TouchableOpacity>

										<TouchableOpacity style={style.button}>
												<AntDesign name="apple1" size={24} color="black" />
												<Text style={style.buttonText}>Continue with Apple</Text>
										</TouchableOpacity>

										<TouchableOpacity style={style.button}>
												<Entypo name="key" size={24} color="black" />
												<Text style={style.buttonText}>Continue with passkeys</Text>
										</TouchableOpacity>

										<View style={style.devider}>
												<Text style={style.deviderOtherText}>______________________</Text>
												<Text style={style.deviderText}> or </Text>
												<Text style={style.deviderOtherText}>______________________</Text>
										</View>

										<TouchableOpacity style={style.continueButton} onPress={signUp}>
												<Text style={style.continueButtonText}>Sing Up</Text>
										</TouchableOpacity>
								</View>
						</KeyboardAvoidingView>
				</SafeAreaView>
		);
}

const style = StyleSheet.create({
		buttonContainer: {
				alignItems: 'center',
		},
		title: {
				fontSize: 25,
				margin: 10
		},
		button:{
				backgroundColor: '#dddddd',
				borderRadius: 8,
				textAlign: 'center',
				justifyContent: 'center',
				width: '90%',
				height: 40,
				flexDirection: 'row',
				alignItems: 'center',
				marginTop: 10
		},
		buttonText: {
				fontSize: 16,
				textAlign: 'center',
				marginLeft: 10,
		},
		devider: {
				flexDirection: 'row',
				alignItems: 'center',
				textAlign: 'center',
				justifyContent: "center",
				marginTop: 10,
				marginBottom: 10
		},
		deviderText: {
				top: 5,
				color: '#b3b3b3',
		},
		deviderOtherText: {
				color: '#b3b3b3',
		},
		buttonImg: {
				width: 30,
				height: 20,
				marginRight: 15
		},
		numberButton: {
				backgroundColor: '#dddddd',
				width: 90,
				height: 40,
				borderRadius: 10,
				justifyContent: 'center',
				flexDirection: "row",
				alignItems: 'center',
		},
		countrySelection: {
				margin: 20,
				flexDirection: "row"
		},
		phoneEnter: {
				backgroundColor: '#dddddd',
				borderRadius: 10,
				width: '72%',
				height: 40,
				marginLeft: 5
		},
		continueButton: {
				backgroundColor: '#000',
				borderRadius: 10,
				width: '90%',
				height: 40,
				alignItems: 'center',
		},
		continueButtonContainer: {
				alignItems: 'center',
				justifyContent: 'center',
				marginTop: 20
		},
		continueButtonText: {
				color: '#fff',
				textAlign: 'center',
				fontSize: 16,
				top: 10
		},
		username: {
				width: '90%',
				height: 40,
				backgroundColor: '#dddddd',
				borderRadius: 10,
				paddingLeft: 10,
				marginTop: 9
		},
		textInput: {
				alignItems: 'center'
		}
})