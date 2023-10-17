import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import styles from "./style";
import { FontAwesome } from "@expo/vector-icons";
import InputForm from "../../components/InputForm";

export default function Pix() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View>
					<FontAwesome
						name="arrow-left"
						size={30}
						color={"#000"}
						style={styles.icon}
					/>
				</View>
				<View>
					<Image
						source={require("../../assets/iconeLogo.png")}
						style={{ width: "100%" }}
						resizeMode="contain"
					/>
				</View>
			</View>

			<View style={styles.destinyAccount}>
				<InputForm label="Destino" placeholder="***" />
			</View>

			<View style={styles.value}>
				<InputForm label="Valor" />
				<View>
					<TextInput placeholder="R$" style={styles.input} />
				</View>
			</View>

			<View>
        <InputForm label="Descrição" placeholder="Opcional" />
      </View>
		</View>
	);
}
