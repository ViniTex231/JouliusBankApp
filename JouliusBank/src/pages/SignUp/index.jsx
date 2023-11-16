import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "../SignUp/style";
import Button from "../../components/Button";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

export default function SignUp({ navigation }) {
	const [nome, setNome] = useState('')
	const [social, setSocial] = useState('')
	const [nascimento, setNascimento] = useState('')
	const [cpf, setcpf] = useState(0)
	const [rg, setRg] = useState('')
	const [email, setEmail] = useState('')
	const [senha, setSenha] = useState('')

	const fodase = () => {
		axios.post('http://10.234.93.57:8000/api/v1/contas',
		{
			cliente: cpf
		}).then((res)=>{
			console.log(res)
		}).catch((erro)=>{
			console.log(erro)
		})
	}

	const submit = ()=> {
		axios.post('http://10.234.93.57:8000/api/v1/auth/users/',
		{
			registro: cpf,
			nome_razao_social: nome,
			nome_social_fantasia: social,
			foto_logo: "a",
			data_nascimento_abertura: nascimento,
			password: senha
		}
		).then((res)=>{
			console.log(res)
			fodase()
			navigation.navigate("SignIn")
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
					<View style={styles.InputView}>
						<Text style={styles.textDesc}>Nome Completo</Text>
					</View>
					<TextInput style={styles.input} placeholder="Julius Rock" onChangeText={(value) => setNome(value)}/>
					
					<View style={styles.InputView}>
						<Text style={styles.textDesc}>Nome Social</Text>
					</View >
					<TextInput style={styles.input} placeholder="Jennifer Rock" onChangeText={(value) => setSocial(value)}/>

					<View style={styles.InputView}>
						<Text style={styles.textDesc}>Data de Nascimento</Text>
					</View>
					<TextInput style={styles.input} placeholder="11/10/2023" onChangeText={(value) => setNascimento(value)}/>

					<View style={styles.InputView}>
						<Text style={styles.textDesc}>CPF</Text>
					</View>
					<TextInput style={styles.input} placeholder="***.***.***-**" onChangeText={(value) => setcpf(value)} keyboardType="number-pad"/>

					<View style={styles.InputView}>
						<Text style={styles.textDesc}>RG</Text>
					</View>
					<TextInput style={styles.input} placeholder="**.***.***-*" onChangeText={(value) => setRg(value)} keyboardType="number-pad"/>

					<View style={styles.InputView}>
						<Text style={styles.textDesc}>Email</Text>
					</View>
					<TextInput style={styles.input} placeholder="fulanodetal@gmail.com" onChangeText={(value) => setEmail(value)}/>

					<View style={styles.InputView}>
						<Text style={styles.textDesc}>Senha</Text>
					</View>
					<TextInput style={styles.input} placeholder="******" onChangeText={(value) => setSenha(value)}/>

					<View style={styles.buttonView}>
						<TouchableOpacity
							style={styles.buttonLogin}
							onPress={() => submit()}
							// onPress={() => {console.log(nome, social, nascimento, cpf, rg, email, senha)}}
						>
							<Text style={styles.buttonText}>Abra sua Conta</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		</View>
	);
}
