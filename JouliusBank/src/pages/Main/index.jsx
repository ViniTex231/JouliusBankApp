import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./style";
import MenuButton from "../../components/MenuButton";
import Activity from "../../components/Activity";
import axios from 'axios'
import { getConta, useAuth } from "../../services/api";

const Main = ({ navigation }) => {
	const {jwt, registroAtivo, conta} = useAuth()
	const [balance, setBalance] = useState(0)
	const [user_id, setUser_id] = useState(1)
	const [movements, setMovements] = useState([])

	// useEffect(async ()=>{
	// 	saldo = await getSaldo(jwt, registroAtivo)
	// 	axios.get(`http://10.109.71.15:8000/api/v1/movimentacoes/`)
	// 	.then((res)=>{
	// 		setMovements(res.data)
	// 	}).catch((erro)=>{
	// 		console.log(erro)
	// 	})
	// }, [user_id])

	useEffect(() => {
    const fetchUserData = async () => {
      try {
        const conta1 = await getConta(jwt, conta);
        setBalance(conta1.saldo)
      }catch(err) {
        console.log("FETCH saldo DATA err", err)
      }
    }
    fetchUserData()
  }, [])

	// useEffect(()=>{
	// 	axios.get(`http://127.0.0.1:8000/api/v1/movimentacoes/1/`)
	// 	.then((res)=>{
	// 		setName(res.data.operacao)
	// 		setDate(res.data.data_hora)
	// 		setValue(res.data.valor)
	// 	}).catch((erro)=>{
	// 		console.log(erro.response.statusText)
	// 	})
	// }, [])


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

					{movements.map((movement)=>(
						<Activity
							key={movement.id}
							name={movement.operacao + " - " + movement.descricao}
							date={movement.data_hora}
							value={"R$ "+movement.valor}
						/>
					))}
				</View>
			</View>
		</View>
	);
}

export default Main;