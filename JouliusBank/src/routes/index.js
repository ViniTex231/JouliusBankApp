import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Main from "../pages/Main";
import SignUpPJ from "../pages/SignUpPJ";
import Card from "../pages/Card";
import Extract from "../pages/Extract";
import Pix from "../pages/Pix";

const Stack = createNativeStackNavigator();

export default function Routes() {
	return (
		<Stack.Navigator>
			{/* <Stack.Screen
				name="Welcome"
				component={Welcome}
				options={{ headerShown: false }}
			/> */}

			{/* <Stack.Screen
				name="SignIn"
				component={SignIn}
				options={{ headerShown: false }}
			/> */}

			{/* <Stack.Screen
				name="SignUp"
				component={SignUp}
				options={{ headerShown: false }}
			/> */}

			{/* <Stack.Screen
				name="SignUpPJ"
				component={SignUpPJ}
				options={{ headerShown: false }}
			/> */}

			{/* <Stack.Screen
				name="Main"
				component={Main}
				options={{ headerShown: false }}
			/> */}

			{/* <Stack.Screen
				name="Card"
				component={Card}
				options={{ headerShown: false }}
			/> */}

			{/* <Stack.Screen
				name="Extract"
				component={Extract}
				options={{ headerShown: false }}
			/> */}

			<Stack.Screen
				name="Pix"
				component={Pix}
				options={{ headerShown: false }}
			/>
			
		</Stack.Navigator>
	);
}
