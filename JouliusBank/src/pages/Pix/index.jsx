import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { FontAwesome } from "@expo/vector-icons";
import InputForm from "../../components/InputForm";
import { criarPix, useAuth } from "../../services/api";



export default function Pix({ navigation }) {

		const { jwt, contaC } = useAuth()

		const [destino, setDestino] = useState(null)
		const [valor, setValor] = useState(0)

		const submit = async () => {
			
			const pix = await criarPix(jwt, contaC, destino, parseFloat(valor))
			console.log(pix)
			navigation.navigate("Main")

		}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View>
					<TouchableOpacity onPress={() => navigation.navigate("Main")}>
						<FontAwesome
							name="arrow-left"
							size={30}
							color={"#fff"}
							style={styles.icon}
						/>
					</TouchableOpacity>
				</View>
				<View style={{ width: "40%" }}>
					<Image
						source={require("../../assets/iconeLogoRoxo.png")}
						style={{ width: "100%" }}
						resizeMode="contain"
					/>
				</View>
			</View>

			<View style={styles.value}>
				<Text style={styles.textValue}>Conta de Destino</Text>
				<View style={styles.boxValue}>
					<TextInput placeholder="******" style={styles.input} onChangeText={(value) => setDestino(value)} />
				</View>
			</View>

			<View style={styles.value}>
				<Text style={styles.textValue}>Valor</Text>
				<View style={styles.boxValue}>
					<TextInput placeholder="R$" style={styles.input} onChangeText={(value) => setValor(value)} />
				</View>
			</View>

			<View style={styles.description}>
				<InputForm label="Descrição" placeholder="Opcional" />
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
