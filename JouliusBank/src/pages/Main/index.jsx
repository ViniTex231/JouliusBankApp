import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import MenuButton from "../../components/MenuButton";
import Activity from "../../components/Activity";

export default function Main({ navigation }) {
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
					<Text style={styles.textBalance}>R$ 10.000,00</Text>
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
