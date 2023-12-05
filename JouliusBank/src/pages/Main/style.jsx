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
        backgroundColor: COLORS.background
    },
    header:{
        width: "100%",
        height: "fit-content",
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20
    },
    boxBalance:{
        width: "100%",
        height: "25%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
    },
    balance:{
        backgroundColor: COLORS.primaryPurple,
        width: "80%",
        height: "100%",
        borderRadius: 20,
    },
    textSaldo:{
        color: COLORS.subtitle,
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
        backgroundColor: COLORS.component,
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
    },
    activitiesForm:{
        paddingStart: "5%",
        paddingTop: "10%",
        display: 'flex',
        flexDirection: 'column',
    },
    activitiesText:{
        borderBottomColor: COLORS.borderPurple,
        borderBottomWidth: 2,
        width: "30%",
        color: COLORS.subtitle,
    },
    activity:{
        paddingTop: "5%",
        paddingStart: "3%",
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between',
        paddingRight: "5%"
    },
    name:{
        fontSize: 14,
        overflow: 'hidden',
        width: '100%',
        color: '#fff',
    },
    data:{
        fontSize: 14,
        color: '#fff',
    },
    price:{
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
    },
    imageMan: {
        width: 100,
        height: 100,
        borderRadius: 100,
        margin: 10
    },
    activityTest: {
        width: 250,
        color: COLORS.subtitle,
    },
    containerActivities:{
        backgroundColor: COLORS.background,
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: '10%',
    },
    logo:{
        // margin: 100
    },
    scrol:{
        height: 300,
        
    },

})

export default styles