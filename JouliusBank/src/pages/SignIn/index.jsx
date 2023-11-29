import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "../SignIn/style";
import { AntDesign } from "@expo/vector-icons";
import { criarToken, useAuth } from "../../services/api";

export default function SignIn({ navigation }) {

	const [cpf, setCpf] = useState(0)
	const [senha, setSenha] = useState('')
	const [conta, setConta] = useState('')

	const { login, ativo, registroAtivo } = useAuth();

	const submit = async () => {
		const token = await criarToken(cpf, senha, login)
		console.log(token)

		if (token.status === 200){
			console.log(conta)
			ativo(conta)
			
			registroAtivo(cpf)
			navigation.navigate('Main')
		}
	}

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
				<View style={styles.inputView}>
					<Text style={styles.textDesc}>CPF ou CNPJ</Text>
				</View>
				<TextInput style={styles.input} placeholder="123.456.789-10" onChangeText={(value) => setCpf(value)}/>

				<View style={styles.inputView}>
					<Text style={styles.textDesc}>Número da Conta</Text>
				</View>
				<TextInput style={styles.input} placeholder="******" onChangeText={(value) => setConta(value)}/>

				<View style={styles.inputView}>
					<Text style={styles.textDesc}>Senha</Text>
				</View>
				<TextInput style={styles.input} placeholder="******" onChangeText={(value) => setSenha(value)}/>

				<View style={styles.buttonView}>
					<TouchableOpacity
						style={styles.buttonLogin}
						onPress={() => submit()}
					>
						<Text style={styles.buttonTextLogin}>Login</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
