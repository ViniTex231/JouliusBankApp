import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "../SignUp/style";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
import { AntDesign } from "@expo/vector-icons";

export default function SignUp({ navigation }) {
	const [nome, setNome] = useState('')
	const [social, setSocial] = useState('')
	const [nascimento, setNascimento] = useState('')
	const [cpf, setcpf] = useState(0)
	const [rg, setRg] = useState(0)
	const [email, setEmail] = useState('')
	const [senha, setSenha] = useState(0)

	const submit = ()=> {
		axios.post('http://127.0.0.1:8000/api/v1/clientes/',
		{
			nome_razao_social: nome,
			nome_social_fantasia: social,
			data_nascimento_abertura: nascimento,
			usuario: email,
			senha: senha
		}
		).then((res)=>{
			setNome('')
			setSocial('')
			setNascimento('')
			setEmail('')
			setSenha('')
		}).catch((erro)=>{
			console.log(erro)
		})
	}

	return (
		<View style={styles.container}>
			<View style={styles.containerSignUp}>
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
					<Text style={styles.textSignUp}>Abra sua Conta</Text>
				</View>
			</View>

			<View style={styles.containerForm}>
				<ScrollView>
					<InputForm label="Nome Completo" placeholder="Julius Rock" />
					<InputForm label="Nome Social" placeholder="Jennifer Rock" />
					<InputForm label="Data de Nascimento" placeholder="11/10/2023" />
					<InputForm label="CPF" placeholder="***.***.***-**" />
					<InputForm label="RG" placeholder="**.***.***-*" />
					<InputForm label="Email" placeholder="fulanodetal@gmail.com" />
					<InputForm label="Senha" placeholder="******" />
					<View style={styles.buttonView}>
						<TouchableOpacity
							style={styles.buttonLogin}
							onPress={() => navigation.navigate("SignIn")}
						>
							<Text style={styles.buttonText}>Abra sua Conta</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		</View>
	);
}
