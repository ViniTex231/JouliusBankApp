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
	container: {
		flex: 1,
		backgroundColor: COLORS.background,
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
		color: COLORS.normalWhite,
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
		borderBottomColor: COLORS.borderPurple,
		borderBottomWidth: 2,
		width: "30%",
		marginTop: "5%",
	},
	textDesc: {
		color: COLORS.normalWhite,
	},
	input: {
		// paddingStart: '5%',
		opacity: 0.5,
		color: COLORS.subtitle,
	},
	buttonLogin: {
		backgroundColor: COLORS.primaryPurple,
		borderRadius: 10,
		paddingVertical: 8,
		justifyContent: "center",
		alignItems: "center",
		width: 200,
	},
	buttonView:{
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonTextLogin: {
		color: COLORS.normalWhite,
	},
	icon: {
		paddingStart: "3%",
	},
});

export default styles;
