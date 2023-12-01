import { StyleSheet } from "react-native";

const COLORS = {
    primaryPurple: "#54007C",
    borderPurple: "#A800F9",
    normalWhite: "#fff",
    subtitle: 'rgba(255, 255, 255, 0.61)',
    background: "#171715",
    component: "#383837",
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header:{
        textAlign: 'right',
        width: '100%',
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingStart: '5%',
    },
    loan:{
        paddingStart: '5%',
        marginTop: '5%',
    },
    textLoan:{
        borderBottomColor: COLORS.borderPurple,
        borderBottomWidth: 2,
        width: '30%',
        color: COLORS.subtitle,
    },
    dataBox:{
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingEnd: 10,
    },
    value: {
        color: COLORS.normalWhite,
    },
    buttonView:{
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonPay:{
        backgroundColor: COLORS.primaryPurple,
        borderRadius: 10,
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
    },
    buttonText:{
        color: COLORS.normalWhite,
    },

})

export default styles