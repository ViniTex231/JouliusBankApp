import { StyleSheet } from "react-native";

const COLORS = {
    primaryPurple: "#54007C",
    borderPurple: "#A800F9",
    normalWhite: "#fff",
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        width: "100%",
        height: "20%",
        backgroundColor: 'red',
    },
    boxBalance:{
        backgroundColor: 'yellow',
        width: "100%",
        height: "25%",
        justifyContent: 'center',
        alignItems: 'center',

    },
    balance:{
        backgroundColor: COLORS.primaryPurple,
        width: "80%",
        height: "100%",
        borderRadius: 20,
    },
    textSaldo:{
        color: COLORS.normalWhite,
        fontSize: 20,
        paddingStart: 20,
        paddingTop: 10,
    },
    textBalance:{
        color: COLORS.normalWhite,
        fontSize: 32,
        paddingStart: 20,
        paddingTop: 10,
    },
    boxOptions:{
        paddingTop: 60,
        paddingStart: 20,
    },
    textOptions:{
        color: COLORS.normalWhite,
    },
    menuButtons:{
        paddingTop: 20,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuButton:{
        backgroundColor: COLORS.primaryPurple,
        alignItems: 'center',
        justifyContent: 'center',
        width: 85,
        height: 55,
        borderRadius: 10,
        display: 'flex',
    },
    icon:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    service:{
        color: COLORS.normalWhite,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default styles