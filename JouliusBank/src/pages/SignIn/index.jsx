import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../SignIn/style";
import InputForm from "../../components/InputForm";
import { AntDesign } from "@expo/vector-icons";

export default function SignIn({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.containerLogin}>
				<View>
					<TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
						<AntDesign
							name="arrowleft"
							size={30}
							color={"#fff"}
							style={styles.icon}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.containerImage}>
					<Image
						source={require("../../assets/icone.png")}
						style={{ width: "100%" }}
						resizeMode="contain"
					/>
				</View>

				<View style={styles.textContainer}>
					<Text style={styles.textLogin}>Login</Text>
				</View>
			</View>

			<View style={styles.containerForm}>
				<InputForm label="CPF ou CNPJ" placeholder="fulanodetal@gmail.com" />
				<InputForm label="Senha" placeholder="******" />
				<View style={styles.buttonView}>
					<TouchableOpacity
						style={styles.buttonLogin}
						onPress={() => navigation.navigate("Main")}
					>
						<Text style={styles.buttonTextLogin}>Login</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
