import { View, Text, TextInput } from 'react-native'
import styles from '../pages/SignIn/style'

export default function InputForm(props) {
    return (
        <View>
            <View style={styles.inputView}>
                <Text style={styles.textDesc}>{props.label}</Text> 
            </View>
            <TextInput
                placeholder={props.placeholder}
                style={styles.input}
            />
            {/* { 
            props.typeInput != 'date' ?
                <TextInput
                    placeholder={props.placeholder}
                    style={styles.input}
                />
            :
                <DateInput
                placeholder={props.placeholder}
                style={styles.input}
            />} */}

        </View>
    )
}
