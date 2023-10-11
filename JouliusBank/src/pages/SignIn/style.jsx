import { StyleSheet } from "react-native";

const COLORS = {
	primaryPurple: "#54007C",
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	containerLogin: {
		width: "100%",
		height: "40%",
		backgroundColor: COLORS.primaryPurple,
	},
	containerImage: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		//    width: '100%',
		//    height: '100%',
		backgroundColor: COLORS.primaryPurple,
	},
	textContainer: {
		// marginTop: '30%',
		paddingStart: "5%",
		backgroundColor: COLORS.primaryPurple,
	},
	textLogin: {
		color: "#fff",
		fontSize: 24,
		paddingBottom: "5%",
	},
	containerForm: {
        flex: 1,
		paddingStart: "5%",
        paddingEnd: "5%",
		marginTop: "5%",
	},
	inputView: {
		borderBottomColor: "#A800F9",
		borderBottomWidth: 2,
		width: "30%",
		marginTop: "5%",
	},
	textDesc: {
		color: "#727272",
	},
	input: {
		// paddingStart: '5%',
		opacity: 0.5,
	},
    button:{
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0
    },
	buttonLogin:{
		backgroundColor: COLORS.primaryPurple,
		borderRadius: 10,
		paddingVertical: 8,
		justifyContent: "center",
		alignItems: "center",
        width: 200,
	},
    buttonTextLogin:{
        color: '#fff',
    },
    icon:{
        paddingStart: "3%",
    }
});

export default styles;
