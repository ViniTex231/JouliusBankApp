import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import Activity from "../../components/Activity";
import { AntDesign } from "@expo/vector-icons";

export default function Extract({ navigation }) {
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
	);
}
