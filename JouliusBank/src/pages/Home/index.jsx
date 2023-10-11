import { View, Text, Image, TouchableOpacity } from "react-native"
import React from "react"
import styles from "../Home/style"
import MenuButton from "../../components/MenuButton"


export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require("../../assets/iconeLogo.png")}
                    style={{ width: "100%" }}
                    resizeMode="contain"
                />
            </View>


            <View style={styles.boxBalance}>
                <View style={styles.balance}>
                    <Text style={styles.textSaldo}>Saldo</Text>
                    <Text style={styles.textBalance}>R$ 10.000,00</Text> {/*API*/}
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
        </View>
    )
}