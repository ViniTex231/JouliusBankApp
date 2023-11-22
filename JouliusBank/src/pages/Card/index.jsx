import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useId } from "react";
import styles from "./style";
import Button from "../../components/Button";
import { FontAwesome } from "@expo/vector-icons";
import { useAuth } from "../../services/api";

export default function Card( {navigation} ) {

	const {jwt, registroAtivo, conta} = useAuth()
	const [numero, setNumero] = useState("")
	const [validade, setValidade] = useState(0)
	const [cvv, setCvv] = useState(0)
	const [limite, setLimite] = useState(0)
	const [nome, setNome] = useState("")

	useEffect(()=>{
		const fetchUserData = async () => {
			try {
				const conta1 = await getConta(jwt, conta)
				setNumero(conta1.numero)
				setValidade(conta1.validade)
				setCvv(conta1.cvv)
				setNome(conta1.nome)
				setLimite(conta1.limite)
			} catch (err) {
				console.log("FETCH numero, validade, cvv, nome, limite DATA err", err)
			}
		} 
		fetchUserData()
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
