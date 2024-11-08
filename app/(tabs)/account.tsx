import React from 'react';
import {ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, Button} from 'react-native';
import {useFonts} from "expo-font";
import AccountOption from "@/components/account/AccountOption";
import {Link, useRouter} from 'expo-router';

export default function Account() {
		const [loaded] = useFonts({
				Poppins_Medium: require('../../assets/fonts/Poppins-Medium.ttf'),
		});

		const router = useRouter();

		const handleNext = () => {
				router.navigate('/(login)');
		};

		return (
				<ScrollView style={styles.container}>
						{/* Header */}
						<View style={styles.header}>
								<View>
										<Text style={styles.name}>amil srinath</Text>
										<Text style={styles.rating}>⭐ 5.0</Text>
								</View>
								<View style={styles.profileIcon}>
										<Image style={styles.profileImg} source={{ uri: 'https://e7.pngegg.com/pngimages/81/570/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png' }} />
								</View>
						</View>

						{/* Menu Buttons */}
						<View style={styles.menu}>
								<TouchableOpacity style={styles.menuButton}>
										<Image style={styles.ButtonsImage} source={{ uri: 'https://w7.pngwing.com/pngs/675/111/png-transparent-computer-icons-icon-design-help-text-number-help.png' }} />
										<Text style={styles.menuText}>Help</Text>
								</TouchableOpacity>

								<TouchableOpacity style={styles.menuButton}>
										<Image style={styles.ButtonsImage} source={{ uri: 'https://images.freeimages.com/fic/images/icons/2770/ios_7_icons/512/wallet.png' }} />
										<Text style={styles.menuText}>Payment</Text>
								</TouchableOpacity>

								<Link href="/activity" asChild>
										<TouchableOpacity style={styles.menuButton}>
												<Image style={styles.ButtonsImage} source={{ uri: 'https://icons.veryicon.com/png/o/education-technology/passenger-flow-analysis-icon-library/activity-assessment.png' }} />
												<Text style={styles.menuText}>Activity</Text>
										</TouchableOpacity>
								</Link>
						</View>

						{/* Promos Section */}
						<TouchableOpacity style={styles.section}>
								<View style={styles.row}>
										<View style={styles.textContainer}>
												<Text style={styles.sectionTitle}>You have multiple promos</Text>
												<Text style={styles.sectionSubtitle}>
														We'll automatically apply the one that saves you the most.
												</Text>
										</View>
										<Image style={styles.LargeButtonsImage} source={{ uri: 'https://dkl8of78aprwd.cloudfront.net/uber_one_landing%403x.png' }}/>
								</View>
						</TouchableOpacity>

						{/* Safety Check-up Section */}
						<TouchableOpacity style={styles.section}>
								<View style={styles.row}>
										<View style={styles.textContainer}>
												<Text style={styles.sectionTitle}>Safety check-up</Text>
												<Text style={styles.sectionSubtitle}>
														Learn ways to make rides safer.
												</Text>
										</View>
										<Image style={styles.LargeButtonsImage} source={{ uri: 'https://e7.pngegg.com/pngimages/605/905/png-clipart-free-pic-web-design-label-thumbnail.png' }}/>
								</View>
						</TouchableOpacity>

						{/* Privacy Check-up Section */}
						<TouchableOpacity style={styles.section}>
								<View style={styles.row}>
										<View style={styles.textContainer}>
												<Text style={styles.sectionTitle}>Privacy check-up</Text>
												<Text style={styles.sectionSubtitle}>
														Take an interactive tour of your privacy settings.
												</Text>
										</View>
										<Image style={styles.LargeButtonsImage} source={{ uri: 'https://png.pngtree.com/png-clipart/20220719/original/pngtree-report-vector-png-image_8368027.png' }}/>
								</View>
						</TouchableOpacity>

						<View style={styles.listContainer}>
								<AccountOption
										uri='https://cdn-icons-png.flaticon.com/128/437/437522.png'
										title='Family'
										subtitle='Manage a family profile'
								/>
								<AccountOption
										uri='https://cdn-icons-png.flaticon.com/128/84/84947.png'
										title='Ride'
								/>
								<AccountOption
										uri='https://cdn-icons-png.flaticon.com/128/2099/2099058.png'
										title='Settings'
								/>
								<AccountOption
										uri='https://cdn-icons-png.flaticon.com/128/2907/2907972.png'
										title='Promotions'
								/>
								<AccountOption
										uri='https://cdn-icons-png.flaticon.com/128/2597/2597085.png'
										title='Help'
								/>
								<AccountOption
										uri='https://cdn-icons-png.flaticon.com/128/3139/3139155.png'
										title='Set up your business profile'
										subtitle='Automate work travel & meal expenses'
								/>
								<AccountOption
										uri='https://cdn-icons-png.flaticon.com/128/4175/4175032.png'
										title='Invite friends'
										subtitle='Learn how to get free delivery'
								/>
								<AccountOption
										uri='https://cdn-icons-png.flaticon.com/128/10348/10348976.png'
										title='Privacy'
								/>
								<AccountOption
										uri='https://cdn-icons-png.flaticon.com/128/901/901163.png'
										title='Communication'
								/>
								<AccountOption
										uri='https://cdn-icons-png.flaticon.com/128/925/925748.png'
										title='Earn by driving or delivering'
								/>
								<AccountOption
										uri='https://cdn-icons-png.flaticon.com/128/8006/8006318.png'
										title='Voice command settinas'
								/>
								<AccountOption
										uri='https://cdn-icons-png.flaticon.com/128/1077/1077063.png'
										title='Manage Uber account'
								/>
								<AccountOption
										uri='https://cdn-icons-png.flaticon.com/128/3503/3503827.png'
										title='About'
								/>

								<Button title={"Sign out"} onPress={handleNext}/>
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
		header: {
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				paddingVertical: 20,
		},
		name: {
				marginLeft: 10,
				marginTop: 20,
				fontSize: 28,
				fontWeight: 'bold',
		},
		rating: {
				fontSize: 18,
				color: '#888',

		},
		profileContainer: {
				justifyContent: 'center',
				alignItems: 'center',
				marginBottom: 30,
		},
		profileIcon: {
				width: 60,
				height: 60,
				margin: 10,
				marginTop: 50,
				borderRadius: 30,
		},
		menu: {
				flexDirection: 'row',
				justifyContent: 'space-around',
				marginBottom: 20,
		},
		menuButton: {
				width: 100,
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
		section: {
				paddingVertical: 15,
				backgroundColor: '#f3f3f3',
				marginBottom: 20,
				paddingRight: 10,
				paddingLeft: 15,
				borderRadius: 20,
		},
		sectionTitle: {
				fontSize: 16,
		},
		sectionSubtitle: {
				fontSize: 12,
				color: '#555',
		},
		image: {
				width: 80,
				height: 80,
		},
		row: {
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
		},
		textContainer: {
				flex: 1,
				paddingRight: 10,
		},
		ButtonsImage: {
				width: 30,
				height: 30,
		},
		listContainer: {
				marginTop: 20,
		},
		LargeButtonsImage: {
				width: 50,
				height: 50,
		},
		profileImg: {
				width: 60,
				height: 60,
				borderRadius: 30,
				alignSelf: 'center',
		},
});
