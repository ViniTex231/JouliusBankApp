import { View,  Text, TouchableOpacity } from "react-native"
import styles from "../pages/Home/style"
import { MaterialIcons, FontAwesome } from "@expo/vector-icons"

export default function MenuButton(props){
    return (
        <View style={styles.menuButton}>
            <TouchableOpacity>
                <View>
                    <FontAwesome
                        name="money"
                        size={30}
                        color={"#fff"}
                        style={styles.icon}
                    />
                </View>
                <Text style={styles.service}>{props.label}</Text>
            </TouchableOpacity>
        </View>
    )
}