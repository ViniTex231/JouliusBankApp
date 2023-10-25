import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../SignUpPJ/style";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
import { AntDesign } from "@expo/vector-icons";

export default function SignUpPJ({ navigation }) {
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
							<InputForm label="Razão Social" placeholder="Joulius Bank LTDA" />
							<InputForm label="Nome Fantasia" placeholder="Joulius Bank" />
							<InputForm label="CNPJ" placeholder="**.***.***/0001-**" />
							<InputForm label="Inscrição Estadual" placeholder="***.***.***.***" />
							<InputForm label="Inscrição Municipal" placeholder="***.***.***.***" />
							<InputForm label="Data de Abertura" placeholder="11/10/2023" />
							<InputForm label="Email" placeholder="fulanodetal@gmail.com" />
							<InputForm label="Senha" placeholder="******" />
							<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
								<Button label="Abra sua Conta" />
							</TouchableOpacity>
						</ScrollView>
						
					</View>
			</View>
  )
}