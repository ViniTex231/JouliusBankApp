import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./style";
import MenuButton from "../../components/MenuButton";
import Activity from "../../components/Activity";
import axios from 'axios'

export default function Main({ navigation }) {
	
	const [balance, setBalance] = useState(0)
	const [user_id, setUser_id] = useState(1)

	useEffect(()=>{
		axios.get(`http://127.0.0.1:8000/api/v1/contas/${user_id}/`)
		.then((res)=>{
			setBalance(res.data.saldo)
		}).catch((erro)=>{
			console.log(erro.response.statusText)
		})
	}, [])


	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image
					source={require("../../assets/iconeLogo.png")}
					// style={{ width: "100%" }}
					// resizeMode="contain"
				/>
				<Image
					source={require("../../assets/man.png")}
					style={styles.imageMan}
					resizeMode="contain"
				/>
			</View>

			<View style={styles.boxBalance}>
				<View style={styles.balance}>
					<Text style={styles.textSaldo}>Saldo</Text>
					<Text style={styles.textBalance}>R$ {balance}</Text>
					<View style={styles.boxOptions}>
						<TouchableOpacity onPress={() => navigation.navigate("Extract")}>
							<Text style={styles.textOptions}>Ver Extrato</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={styles.textOptions}>Ver Investimentos</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>

			<View style={styles.menuButtons}>
				<TouchableOpacity onPress={() => navigation.navigate("Pix")}>
					<MenuButton icon="" label="Pix" />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("Loan")}>
					<MenuButton icon="" label="Empréstimos" />
				</TouchableOpacity>
				<TouchableOpacity>
					<MenuButton icon="" label="Pagamentos" />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("Card")}>
					<MenuButton icon="" label="Cartões" />
				</TouchableOpacity>
			</View>

			<View style={styles.containerActivities}>
				<View style={styles.activitiesForm}>
					<Text style={styles.activitiesText}>Sua atividade</Text>

					<Activity
						name="Compra em Fazendinha"
						date="22/07 - 23:50"
						value="R$ 325,15"
					/>
					<Activity
						name="Compra em Fazendinha"
						date="22/07 - 23:50"
						value="R$ 325,15"
					/>
					<Activity
						name="Compra em Fazendinha"
						date="22/07 - 23:50"
						value="R$ 325,15"
					/>
				</View>
			</View>
		</View>
	);
}
