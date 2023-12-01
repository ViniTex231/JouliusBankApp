import { View, Text, TouchableOpacity, Image, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { FontAwesome } from "@expo/vector-icons";
import { criarEmprestimo, useAuth } from "../../services/api";

export default function Loan({ navigation }) {

	const { jwt, contaC } = useAuth()
	const [valor, setValor] = useState(0)

	const submit = async () => {
		try {
			const emprestimo = await criarEmprestimo(jwt, contaC, parseFloat(valor))
			// console.log(emprestimo)
			navigation.navigate("Main")
		} catch (error) {
			console.log("AAAAAAA")
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View>
					<TouchableOpacity onPress={() => navigation.navigate("Main")}>
						<FontAwesome name="arrow-left" size={30} color={"#fff"} />
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
					<TextInput placeholder="R$" style={styles.input} onChangeText={(value) => setValor(value)} />
				</View>
			</View>

			<TouchableOpacity onPress={() => submit()}>
				<View style={styles.button}>
					<FontAwesome
						name="check"
						size={40}
						color={"#fff"}
						style={styles.icon}
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
}
