import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../pages/SignIn/style";

export default function Button(props) {
	return (
    <TouchableOpacity style={styles.buttonLogin}>
      <Text style={styles.buttonTextLogin}>{props.label}</Text>
    </TouchableOpacity>
	);
}
