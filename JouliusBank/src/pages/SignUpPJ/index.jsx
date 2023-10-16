import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../SignUpPJ/style";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
import { AntDesign } from "@expo/vector-icons";

export default function SignUpPJ() {
  return(
    <View style={styles.container}>
			<View style={styles.containerSignUp}>
				<View>
          <TouchableOpacity>
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
				<InputForm label="Nome" placeholder="Joulius Bank LTDA" />
				<InputForm label="Inscrição Estadual" placeholder="***.***.***.***" />
				<InputForm label="Data de Abertura" placeholder="11/10/2023" />
				<InputForm label="CNPJ" placeholder="**.***.***/0001-**" />
				<InputForm label="Email" placeholder="fulanodetal@gmail.com" />
				<InputForm label="Senha" placeholder="******" />
				<View style={styles.button}>
					<Button label="Abra sua Conta" />
				</View>
			</View>
		</View>
  )
}