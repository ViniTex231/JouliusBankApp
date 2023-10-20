import { View, Text, TouchableOpacity } from "react-native";
import styles from "../pages/Main/style";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

export default function MenuButton(props) {
	return (
		<View style={styles.menuButton}>
			<FontAwesome name="money" size={30} color={"#fff"} style={styles.icon} />

			<Text style={styles.service}>{props.label}</Text>
		</View>
	);
}
