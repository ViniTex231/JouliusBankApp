import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import ActivityExtract from "../../components/ActivityExtract";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

export default function Extract({ navigation }) {

	const [mov_id, setMov_id] = useState(1)
	const [name, setName] = useState('')
	const [date, setDate] = useState('')
	const [value, setValue] = useState(0)
	const [movements, setMovements] = useState([]) 

	useEffect(()=>{
		axios.get(`http://10.109.71.15:8000/api/v1/movimentacoes/`)
		.then((res)=>{
			setMovements(res.data)
		}).catch((erro)=>{
			console.log(erro)
		})
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

				{movements.map((movement)=> (

				<ActivityExtract
					key={movement.id}
					name={movement.operacao}
					date={movement.data_hora}
					value={"R$ " + movement.valor}
				/>
				))}
			</View>
		</View>
	);
}
