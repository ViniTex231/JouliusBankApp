import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import MenuButton from "../../components/MenuButton";
import Activity from "../../components/Activity";

export default function Main() {
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
						<TouchableOpacity>
							<Text style={styles.textOptions}>Ver Extrato</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={styles.textOptions}>Ver Investimentos</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>

			<View style={styles.menuButtons}>
				<MenuButton icon="" label="Pix" />
				<MenuButton icon="" label="Empréstimos" />
				<MenuButton icon="" label="Pagamentos" />
				<MenuButton icon="" label="Cartões" />
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
			</View>
		</View>
	);
}
