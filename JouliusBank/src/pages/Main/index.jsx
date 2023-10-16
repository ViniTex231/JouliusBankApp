import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import MenuButton from "../../components/MenuButton";
import { FontAwesome } from "@expo/vector-icons";

export default function Main() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image
					source={require("../../assets/iconeLogo.png")}
					style={{ width: "100%" }}
					resizeMode="contain"
				/>
				<Image
					source={require("../../assets/man.png")}
					style={{ width: "100%" }}
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

				<View style={styles.activity}>
					<FontAwesome 
						name="credit-card"
						size={30}
						color={"#000"}
						style={styles.icon}
					/>
					<View>
						<Text style={styles.name}>Compra em Fazendinha</Text>
						<Text style={styles.data}>24/07 - 23:48</Text>
					</View>
					<Text style={styles.price}>R$ 384,53</Text>
				</View>
			</View>
		</View>
	);
}
