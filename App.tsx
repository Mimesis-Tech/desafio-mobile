import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
	useFonts,
	Inter_400Regular as I400,
	Inter_700Bold as I700,
} from "@expo-google-fonts/inter";
import { Roboto_400Regular as R400 } from "@expo-google-fonts/roboto";
import { theme } from "./src/styles/theme";

import { Home } from "./src/pages/Home";
import { Details } from "./src/pages/Details";
import { Theme } from "./src/types/theme";

export default function App() {
	const [fontsLoaded] = useFonts({
		I400,
		I700,
		R400,
	});

	if (!fontsLoaded) {
		return null;
	}

	const Stack = createStackNavigator();

	return (
		<ThemeProvider theme={theme as Theme}>
			<StatusBar style="auto" translucent={true} />
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen
						options={{
							title: "",
							headerTransparent: false,
							headerShown: false,
						}}
						name="Home"
						component={Home}
					/>
					<Stack.Screen
						options={{
							title: "",
							headerTransparent: false,
							headerShown: false,
						}}
						name="Details"
						component={Details}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</ThemeProvider>
	);
}
