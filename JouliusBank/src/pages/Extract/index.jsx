import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import ActivityExtract from "../../components/ActivityExtract";
import { AntDesign } from "@expo/vector-icons";
import { getMovimentacao, useAuth } from "../../services/api";

const Extract = ({ navigation }) => {

	const { jwt } = useAuth()
	const [movements, setMovements] = useState([]) 

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const contamov = await getMovimentacao(jwt)
				setMovements(contamov)
			} catch (err){
				console.log('FETCH movimentacao DATA err', err)
			}
		}
		fetchUserData()
	}, [])

	return (
		<View style={styles.container}>
			<View style={styles.containerExtract}>
				<View>
					<TouchableOpacity onPress={() => navigation.navigate('Main')}>
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
					<Text style={styles.textExtract}>Extrato</Text>
				</View>
			</View>

			<View style={styles.activitiesForm}>
				<Text style={styles.activitiesText}>Sua atividade</Text>
				<ScrollView style={styles.scrol}>
					{movements && Array.isArray(movements) && movements.map((movement) => (
						<ActivityExtract
							key={movement.id}
							name={movement.operacao}
							date={movement.data_hora}
							value={"R$ " + movement.valor}
						/>
					))}
				</ScrollView>
			</View>
		</View>
	);
}

export default Extract
