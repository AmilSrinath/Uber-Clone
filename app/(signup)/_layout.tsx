import React from 'react';
import {Stack} from "expo-router";

function _Layout() {
		return (
				<Stack>
					<Stack.Screen name="index" options={{headerShown: false}}/>
				</Stack>
		);
}

export default _Layout;