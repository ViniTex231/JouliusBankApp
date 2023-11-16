import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "../SignIn/style";
import InputForm from "../../components/InputForm";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

export default function SignIn({ navigation }) {

	const [cpf, setCpf] = useState(0)
	const [senha, setSenha] = useState('')

	
	const submit = () => {
		axios.post('http://10.109.71.15:8000/api/v1/auth/jwt/create/',
		{
			registro: cpf,
			password: senha
		}).then((res)=>{
			console.log(res.status)
			if (res.status === 200){
				navigation.navigate("Main")
			}
		}).catch((erro)=>{
			console.log(erro)
		})
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
				<TextInput label="CPF ou CNPJ" placeholder="123.456.789-10" onChangeText={(value) => setCpf(value)}/>
				<TextInput label="Senha" placeholder="******" onChangeText={(value) => setSenha(value)}/>
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
