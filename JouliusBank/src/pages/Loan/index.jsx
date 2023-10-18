import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import styles from "./style";
import { FontAwesome } from "@expo/vector-icons";

export default function Loan({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View>
					<TouchableOpacity onPress={() => navigation.navigate('Main')}>
						<FontAwesome name="arrow-left" size={30} color={styles.icon} />
					</TouchableOpacity>
				</View>
				<View style={{ width: "40%" }}>
					<Image
						source={require("../../assets/iconeLogo.png")}
						style={{ width: "100%" }}
						resizeMode="contain"
					/>
				</View>
			</View>

			<View style={styles.value}>
				<Text style={styles.textValue}>Valor</Text>
				<View style={styles.boxValue}>
					<TextInput placeholder="R$" style={styles.input} />
				</View>
			</View>

			<View style={styles.button}>
				<TouchableOpacity onPress={() => navigation.navigate('Main')}>
					<FontAwesome
						name="check"
						size={40}
						color={"#fff"}
						style={styles.icon}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}
