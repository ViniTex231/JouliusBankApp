import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import Button from "../../components/Button";
import { FontAwesome } from "@expo/vector-icons";

export default function Card() {
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
				<View style={{width: "40%"}}>
					<Image
						source={require("../../assets/iconeLogo.png")}
						style={{ width: "100%" }}
						resizeMode="contain"
					/>
				</View>
			</View>

			<View style={styles.card}>
				<Image
					source={require("../../assets/cartao.png")}
					style={{ width: "100%" }}
					resizeMode="contain"
				/>
			</View>

			<View style={styles.cardHeader}>
				<Text style={styles.textCard}>Dados do Cartão</Text>

				<View style={styles.cardDetails}>
					<Text>Nome</Text>
					<Text>Julius Rock</Text>
				</View>

				<View style={styles.cardDetails}>
					<Text>Número</Text>
					<Text>1234-4567-8991-1231</Text>
				</View>

				<View style={styles.cardDetails}>
					<Text>Validade</Text>
					<Text>12/31</Text>
				</View>

				<View style={styles.cardDetails}>
					<Text>CVV</Text>
					<Text>041</Text>
				</View>
			</View>

			<View style={styles.button}>
				<Button label="Bloquear" />
			</View>
		</View>
	);
}
