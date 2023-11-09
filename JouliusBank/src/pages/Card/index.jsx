import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useId } from "react";
import styles from "./style";
import Button from "../../components/Button";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";

export default function Card( {navigation} ) {

	const [user_id, setUser_id] = useState(1)
	const [numero, setNumero] = useState("")
	const [validade, setValidade] = useState(0)
	const [cvv, setCvv] = useState(0)
	const [limite, setLimite] = useState(0)
	const [nome, setNome] = useState("")

	useEffect(()=>{
		axios.get(`http://10.109.71.15:8000/api/v1/cartoes/${user_id}/`)
		.then((res)=>{
			setNumero(res.data.numero)
			setValidade(res.data.validade)
			setCvv(res.data.cvv)
		}).catch((erro)=>{
			console.log(erro)
		})
		axios.get(`http://10.109.71.15:8000/api/v1/contas/${user_id}`)
		.then((res)=>{
			setLimite(res.data.limite)
		}).catch((erro)=>{
			console.log(erro)
		})
		axios.get(`http://10.109.71.15:8000/api/v1/clientes/${user_id}/`)
		.then((res)=>{
			setNome(res.data.nome_razao_social)
		}).catch((erro)=>{
			console.log(erro)
		})
	}, [])

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View>
					<TouchableOpacity onPress={() => navigation.navigate('Main')}>
						<FontAwesome
							name="arrow-left"
							size={30}
							color={"#000"}
							style={styles.icon}
						/>
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

			<View style={styles.card}>
				<Image
					source={require("../../assets/cartao.png")}
					style={{ width: "100%" }}
					resizeMode="contain"
				/>
			</View>

			<View style={styles.cardHeader}>
				<Text style={styles.textCard}>Dados do Cartão</Text>

				<View style={styles.cardDetails}>
					<Text>Nome</Text>
					<Text>{nome}</Text>
				</View>

				<View style={styles.cardDetails}>
					<Text>Número</Text>
					<Text>{numero}</Text>
				</View>

				<View style={styles.cardDetails}>
					<Text>Validade</Text>
					<Text>{validade}</Text>
				</View>

				<View style={styles.cardDetails}>
					<Text>CVV</Text>
					<Text>{cvv}</Text>
				</View>
			</View>

			<View style={styles.limitHeader}>
				<Text style={styles.textCard}>Limite</Text>
				<View style={styles.cardDetails}>
					<Text>Limite total</Text>
					<Text>{"R$ " + limite}</Text>
				</View>

				<View style={styles.cardDetails}>
					<Text>Limite utilizado</Text>
					<Text>R$ 2136</Text>
				</View>
			</View>

			<View style={styles.button}>
				<Button label="Bloquear" />
			</View>

		</View>
	);
}
