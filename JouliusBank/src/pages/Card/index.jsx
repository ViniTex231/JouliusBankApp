import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useId } from "react";
import styles from "./style";
import Button from "../../components/Button";
import { FontAwesome } from "@expo/vector-icons";
import { useAuth, getConta, getCartao } from "../../services/api";

export default function Card( {navigation} ) {

	const {jwt, registroAtivo, contaC} = useAuth()
	const [numero, setNumero] = useState(null)
	const [validade, setValidade] = useState(null)
	const [cvv, setCvv] = useState(null)
	const [limite, setLimite] = useState(null)
	const [nome, setNome] = useState(null)

	useEffect(()=>{
		const fetchUserData = async () => {
			try {
				const conta1 = await getConta(jwt, contaC)
				setNumero(conta1.numero)
				setNome(conta1.nome)
				setLimite(conta1.limite)

				const cartao = await getCartao(jwt, contaC)
				setValidade(cartao.validade)
				setCvv(cartao.cvv)
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
