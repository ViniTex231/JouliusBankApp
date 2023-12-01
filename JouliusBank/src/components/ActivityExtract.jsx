import { View, Text } from "react-native";
import styles from "../pages/Extract/style";
import { FontAwesome } from "@expo/vector-icons";

export default function ActivityExtract(props) {
	return (
		<View style={styles.activity}>
			<View style={{ gap: 10, display: "flex", flexDirection: "row" }}>
				<FontAwesome
					name="credit-card"
					size={30}
					color={"#fff"}
					style={styles.icon}
				/>
				<View style={styles.activityTest}>
					<Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
						{props.name}
					</Text>
					<Text style={styles.data}>{props.date}</Text>
				</View>
			</View>

			<Text style={styles.price}>{props.value}</Text>
		</View>
	);
}
