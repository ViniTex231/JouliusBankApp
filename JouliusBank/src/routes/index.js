import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Main from "../pages/Main";
import SignUpPJ from "../pages/SignUpPJ";
import Card from "../pages/Card";
import Extract from "../pages/Extract";
import Pix from "../pages/Pix";
import Loan from "../pages/Loan";
import Profile from "../pages/Profile";

const Stack = createStackNavigator();

export default function Routes() {
	return (
		<Stack.Navigator>
			{/* <Stack.Screen
				name="Welcome"
				component={Welcome}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name="SignIn"
				component={SignIn}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name="SignUp"
				component={SignUp}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name="SignUpPJ"
				component={SignUpPJ}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name="Main"
				component={Main}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name="Card"
				component={Card}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name="Extract"
				component={Extract}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name="Pix"
				component={Pix}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name="Loan"
				component={Loan}
				options={{ headerShown: false }}
			/> */}

			<Stack.Screen
				name="Profile"
				component={Profile}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
