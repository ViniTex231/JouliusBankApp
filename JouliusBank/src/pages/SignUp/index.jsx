import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import styles from "../SignUp/style";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
import { AntDesign } from "@expo/vector-icons";

export default function SignUp() {
	return (
		<View style={styles.container}>
			<View style={styles.containerSignUp}>
				<View>
					<AntDesign
						name="arrowleft"
						size={30}
						color={"#fff"}
						style={styles.icon}
					/>
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
				<InputForm label="Nome" placeholder="Julius" />
				<InputForm label="Sobrenome" placeholder="Rock" />
				<InputForm label="Data de Nascimento" placeholder="11/10/2023" />
				<InputForm label="CPF" placeholder="***.***.***-**" />
				<InputForm label="Email" placeholder="fulanodetal@gmail.com" />
				<InputForm label="Senha" placeholder="******" />
				<View style={styles.button}>
					<Button label="Abra sua Conta" />
				</View>
			</View>
		</View>
	);
}
