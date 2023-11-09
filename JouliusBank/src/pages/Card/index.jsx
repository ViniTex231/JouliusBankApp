import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import Button from "../../components/Button";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";

export default function Card( {navigation} ) {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View>
					<TouchableOpacity onPress={() => navigation.navigate('Main')}>
						<FontAwesome
							name="arrow-left"
							size={30}
							color={"#000"}
							style={styles.icon}
						/>
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

			<View style={styles.limitHeader}>
				<Text style={styles.textCard}>Limite</Text>
				<View style={styles.cardDetails}>
					<Text>Limite total</Text>
					<Text>R$ 5000</Text>
				</View>

				<View style={styles.cardDetails}>
					<Text>Limite utilizado</Text>
					<Text>R$ 2136</Text>
				</View>
			</View>

			<View style={styles.button}>
				<Button label="Bloquear" />
			</View>

		</View>
	);
}
