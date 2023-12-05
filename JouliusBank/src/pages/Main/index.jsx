import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import styles from "./style";
import MenuButton from "../../components/MenuButton";
import Activity from "../../components/Activity";
import { getConta, getMovimentacao, getPerfil, useAuth } from "../../services/api";

const Main = ({ navigation }) => {
	const {jwt, registroAtivo, contaC} = useAuth()
	const [balance, setBalance] = useState(0)
	const [movements, setMovements] = useState()
	const [image, setImage] = useState(null)

	useFocusEffect(
		React.useCallback(() => {
			async function fetchData() {
				try {
					const conta1 = await getConta(jwt, contaC);
					setBalance(conta1.saldo);
				} catch (err) {
					console.log('FETCH saldo DATA err', err);
				}
			}
			fetchData();
		}, [navigation])
	);

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const contamov = await getMovimentacao(jwt);
				console.log('Dados de movimentação:', contamov);
	
				setMovements(contamov);
			} catch (err) {
				console.log('FETCH saldo DATA err', err);
			}
		};
	
		fetchUserData();
	}, [balance]);

	useEffect(() => {
		const fetchImageData = async () => {
			try {
				const conta = await getPerfil(jwt)
				setImage(conta[0].foto_logo)
			} catch (err) {
				console.log("FETCH image DATA err", err)
			}
		}
		fetchImageData()
	}, [])


	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.navigate("Profile")}>
				<View style={styles.header}>	
					<Image
						source={require("../../assets/iconeLogoRoxo.png")}
						style={styles.logo}
					/>
					<Image
						source={{ uri: image }}
						style={styles.imageMan}
						resizeMode="contain"
					/>
				</View>
			</TouchableOpacity>

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
				<TouchableOpacity onPress={() => navigation.navigate("LoanPayment")}>
					<MenuButton icon="" label="Pagamentos" />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("Card")}>
					<MenuButton icon="" label="Cartões" />
				</TouchableOpacity>
			</View>

			<View style={styles.containerActivities}>
					<View style={styles.activitiesForm}>
					<Text style={styles.activitiesText}>Sua atividade</Text>
						<ScrollView style={styles.scrol}>
									{movements && Array.isArray(movements) && movements.reverse().map((movement)=>(
										<Activity
											key={movement.id}
											name={movement.operacao + " - "}
											date={movement.data_hora}
											value={"R$ " + movement.valor}
										/>
									))}
							</ScrollView>
						</View>
			</View>
		</View>
	);
}
//
export default Main;