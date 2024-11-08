import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView} from "react-native";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import firebase from "firebase/compat";
import { FIREBASE_AUTH } from "@/config/FirebaseConfig";
import Icon from 'react-native-vector-icons/Ionicons';
import {router} from "expo-router"; // Import the icon library

export default function Index() {
		const [name, setName] = useState('');
		const [email, setEmail] = useState('');
		const [password, setPassword] = useState('');
		const [rePassword, setRePassword] = useState('');
		const [showPassword, setShowPassword] = useState(false);
		const [showRePassword, setShowRePassword] = useState(false);
		const [selectedRole, setSelectedRole] = useState('User'); // State for radio button selection

		const auth = FIREBASE_AUTH;

		const signUp = async () => {
				try {
						const response = await createUserWithEmailAndPassword(auth, email, password);
						console.log(response);
						alert("Account created successfully");
				} catch (error) {
						console.log(error);
						alert(error);
				}
		};

		const navigateSignIn = async () => {
				router.replace('/(login)');
		}

		return (
				<SafeAreaView>
						<KeyboardAvoidingView>
								<Text style={style.title}>Sign Up</Text>

								<View style={style.textInput}>
										<TextInput
												style={style.username}
												placeholder={"Your Full Name"}
												autoCapitalize="none"
												keyboardType="default"
												onChangeText={setName}
										/>
										<TextInput
												style={style.username}
												placeholder={"Your Email"}
												autoCapitalize="none"
												keyboardType="email-address"
												onChangeText={setEmail}
										/>
										<View style={style.passwordContainer}>
												<TextInput
														style={[style.username, { flex: 1 }]}
														placeholder={"Your Password"}
														secureTextEntry={!showPassword}
														onChangeText={setPassword}
												/>
												<TouchableOpacity
														style={style.iconButton}
														onPress={() => setShowPassword(prev => !prev)}
												>
														<Icon
																name={showPassword ? 'eye-off' : 'eye'}
																size={20}
																color="#000"
														/>
												</TouchableOpacity>
										</View>

										<View style={style.passwordContainer}>
												<TextInput
														style={[style.username, { flex: 1 }]}
														placeholder={"Your Re-Password"}
														secureTextEntry={!showRePassword}
														onChangeText={setRePassword}
												/>
												<TouchableOpacity
														style={style.iconButton}
														onPress={() => setShowRePassword(prev => !prev)}
												>
														<Icon
																name={showRePassword ? 'eye-off' : 'eye'}
																size={20}
																color="#000"
														/>
												</TouchableOpacity>
										</View>

										{/* Radio Buttons for User/Driver Selection */}
										<View style={style.radioContainer}>
												<Text style={style.radioText}>I am</Text>
												<TouchableOpacity
														style={style.radioButton}
														onPress={() => setSelectedRole('User')}
												>
														<View style={[style.radioOuter, selectedRole === 'User' && style.radioSelected]}>
																{selectedRole === 'User' && <View style={style.radioInner} />}
														</View>
														<Text style={style.radioText}>User</Text>
												</TouchableOpacity>

												<TouchableOpacity
														style={style.radioButton}
														onPress={() => setSelectedRole('Driver')}
												>
														<View style={[style.radioOuter, selectedRole === 'Driver' && style.radioSelected]}>
																{selectedRole === 'Driver' && <View style={style.radioInner} />}
														</View>
														<Text style={style.radioText}>Driver</Text>
												</TouchableOpacity>
										</View>

										<TouchableOpacity style={style.continueButton} onPress={signUp}>
												<Text style={style.continueButtonText}>Sing Up</Text>
										</TouchableOpacity>
								</View>

								<View style={style.devider}>
										<Text style={style.deviderOtherText}>______________________</Text>
										<Text style={style.deviderText}> or </Text>
										<Text style={style.deviderOtherText}>______________________</Text>
								</View>

								<TouchableOpacity style={style.continueButton} onPress={navigateSignIn}>
										<Text style={style.continueButtonText}>Sing In</Text>
								</TouchableOpacity>
						</KeyboardAvoidingView>
				</SafeAreaView>
		);
}

const style = StyleSheet.create({
		title: {
				fontSize: 25,
				margin: 10
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
		},
		passwordContainer: {
				flexDirection: 'row',
				alignItems: 'center',
				width: '90%',
				marginTop: 9
		},
		iconButton: {
				marginLeft: -5,
				marginTop: 9,
				paddingHorizontal: 10
		},
		radioContainer: {
				flexDirection: 'row',
				justifyContent: 'space-around',
				marginTop: 25,
				width: '100%',
		},
		radioButton: {
				flexDirection: 'row',
				alignItems: 'center'
		},
		radioOuter: {
				width: 20,
				height: 20,
				borderRadius: 10,
				borderWidth: 1,
				borderColor: '#000',
				justifyContent: 'center',
				alignItems: 'center',
				marginRight: 5
		},
		radioInner: {
				width: 10,
				height: 10,
				borderRadius: 5,
				backgroundColor: '#000'
		},
		radioText: {
				fontSize: 16
		},
		radioSelected: {
				borderColor: '#000'
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
		continueButton: {
				backgroundColor: '#000',
				borderRadius: 10,
				width: '90%',
				height: 40,
				alignItems: 'center',
				marginTop: 20,
				alignSelf: "center"
		},
		continueButtonText: {
				color: '#fff',
				textAlign: 'center',
				fontSize: 16,
				top: 10
		},
});
