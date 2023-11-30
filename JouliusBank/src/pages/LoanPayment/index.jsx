import { View, Text, TouchableOpacity, Image, TextInput, Alert } from "react-native"
import React, { useState } from "react"
import styles from "../LoanPayment/style"
import { FontAwesome } from "@expo/vector-icons"
import { useAuth } from "../../services/api"

export default function LoanPayment({ navigation }) {

    const { jwt, contaC } = useAuth()
    const [valor, setValor] = useState(0)
    const [data, setData] = useState(null)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                        <FontAwesome name="arrow-left" size={30} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={{ width: "40%" }}>
                    {/* <Image
                        source={require("../../assets/iconeLogoRoxo.png")}
                        style={{ width: "100%" }}
                        resizeMode="contain"
                    /> */}
                </View>
            </View>

            <View style={styles.loan}>
                <Text style={styles.textLoan}>Seus Empréstimos</Text>
                <View style={styles.dataBox}>
                    <Text style={styles.value}>Valor</Text>
                    <Text style={styles.value}>{valor}</Text>
                </View>

                <View style={styles.dataBox}>
                    <Text style={styles.value}>Data</Text>
                    <Text style={styles.value}>{data}</Text>
                </View>

                <View style={styles.buttonView}>
                    <TouchableOpacity
                        style={styles.buttonPay}
                        onPress={() => submit()}
                    >
                        <Text style={styles.buttonText}>Pagar</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}