import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "../SignUpPJ/style";
import Button from "../../components/Button";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

export default function SignUpPJ({ navigation }) {

	const [nome, setNome] = useState('')
	const [social, setSocial] = useState('')
	const [abertura, setAbertura] = useState('')
	const [cnpj, setCnpj] = useState(0)
	const [inscEst, setInscEst] = useState('')
	const [inscMun, setInscMun] = useState('')
	const [email, setEmail] = useState('')
	const [senha, setSenha] = useState('')

	const submit = () => {
		axios.post('http://10.109.71.15:8000/api/v1/auth/users/',
		{
			registro: parseInt(cnpj),
			nome_razao_social: nome,
			nome_social_fantasia: social,
			foto_logo: "a",
			data_nascimento_abertura: abertura,
			password: senha
		}).then((res)=>{
			console.log(res)
			navigation.navigate("SignIn")
			setNome('')
			setSocial('')
			setAbertura('')
			setEmail('')
			setSenha('')
		}).catch((erro)=>{
			console.log(erro)
		})
	}

  return(
		<View style={styles.container}>
				<View style={styles.containerSignUp}>
					<View>
			<TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
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
						<Text style={styles.textSignUp}>Abra sua Conta PJ</Text>
					</View>
				</View>
				
					<View style={styles.containerForm}>
						<ScrollView>
							<View style={styles.InputView}>
								<Text style={styles.textDesc}>Razão Social</Text>
							</View>
							<TextInput style={styles.input} placeholder="Joulius Bank LTDA" onChangeText={(value) => setNome(value)} />

							<View style={styles.InputView}>
								<Text style={styles.textDesc}>Nome Fantasia</Text>
							</View>
							<TextInput style={styles.input} placeholder="Joulius Bank" onChangeText={(value) => setSocial(value)} />

							<View style={styles.InputView}>
								<Text style={styles.textDesc}>CNPJ</Text>
							</View>
							<TextInput style={styles.input} placeholder="**.***.***/0001-**" onChangeText={(value) => setCnpj(value)} />

							<View style={styles.InputView}>
								<Text style={styles.textDesc}>Inscrição Estadual</Text>
							</View>
							<TextInput style={styles.input} placeholder="***.***.***.***" onChangeText={(value) => setInscEst(value)} />

							<View style={styles.InputView}>
								<Text style={styles.textDesc}>Inscrição Municipal</Text>
							</View>
							<TextInput style={styles.input} placeholder="***.***.***.***" onChangeText={(value) => setInscMun(value)} />
							
							<View style={styles.InputView}>
								<Text style={styles.textDesc}>Data de Abertura</Text>
							</View>
							<TextInput style={styles.input} placeholder="11/10/2023" onChangeText={(value) => setAbertura(value)} />

							<View style={styles.InputView}>
								<Text style={styles.textDesc}>Email</Text>
							</View>
							<TextInput style={styles.input} placeholder="fulanodetal@gmail.com" onChangeText={(value) => setEmail(value)} />

							<View style={styles.InputView}>
								<Text style={styles.textDesc}>Senha</Text>
							</View>
							<TextInput style={styles.input} placeholder="******" onChangeText={(value) => setSenha(value)} />

							<TouchableOpacity style={styles.button} onPress={() => submit()}>
								<Text style={styles.buttonText}>Abra sua Conta</Text>
							</TouchableOpacity>
						</ScrollView>
						
					</View>
			</View>
  )
}