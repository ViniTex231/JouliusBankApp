import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useId } from "react";
import styles from "./style";
import Button from "../../components/Button";
import { FontAwesome } from "@expo/vector-icons";
import { useAuth, getConta, getCartao, getNome } from "../../services/api";

export default function Card( {navigation} ) {
	const [cards, setCards] = useState([])
	const [names, setNames] = useState([])
	const {jwt, registroAtivo, contaC} = useAuth()
	const [numero, setNumero] = useState(null)
	const [validade, setValidade] = useState(0)
	const [cvv, setCvv] = useState(0)
	const [limite, setLimite] = useState(null)
	const [nome, setNome] = useState(null)

	useEffect(()=>{
		const fetchUserData = async () => {
			try {
				const conta1 = await getConta(jwt, contaC)
				setNumero(conta1.numero)
				setLimite(conta1.limite)
			} catch (err) {
				console.log("FETCH numero, validade, cvv, nome, limite DATA err", err)
			}
		} 
		fetchUserData()
	}, [])

	useEffect(()=>{
		const fetchCardData = async () => {
			try {
				const cartoes = await getCartao(jwt, contaC)
				setCvv(cartoes[0].cvv)
				setValidade(cartoes[0].validade)
				setCards(cartoes)
				
			} catch (err) {
				console.log("FETCH cvv, validade DATA err", err)
			}
		}
		fetchCardData()
	}, [])

	useEffect(()=>{
		const fetchNameData = async () => {
			try {
				const nomes = await getNome(jwt)
				setNome(nomes[0].nome_razao_social)
				setNames(nomes)
			} catch (err) {
				console.log("FETCH nome DATA err", err)
			}
		}
		fetchNameData()
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
