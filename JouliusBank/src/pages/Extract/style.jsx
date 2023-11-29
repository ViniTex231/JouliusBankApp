import { StyleSheet } from "react-native";

const COLORS = {
	primaryPurple: "#54007C",
	borderPurple: "#A800F9",
	normalWhite: "#fff",
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	containerExtract: {
		width: "100%",
		height: "30%",
		backgroundColor: COLORS.primaryPurple,
	},
	containerImage: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLORS.primaryPurple,
	},
	icon: {
		alignItems: "center",
		justifyContent: "center",
		paddingStart: "5%",
	},
	textContainer: {
		paddingStart: "5%",
		backgroundColor: COLORS.primaryPurple,
	},
	textExtract: {
		color: COLORS.normalWhite,
		fontSize: 24,
		paddingBottom: "5%",
	},
	activitiesForm: {
		paddingStart: "5%",
		paddingTop: "10%",
		display: "flex",
		flexDirection: "column",
	},
	activitiesText: {
		borderBottomColor: COLORS.borderPurple,
		borderBottomWidth: 2,
		width: "30%",
		color: "#a1a1a1",
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
	name: {
		fontSize: 14,
		overflow: "hidden",
		width: "100%",
	},
	data: {
		fontSize: 14,
	},
	price: {
		fontSize: 16,
		alignItems: "center",
		justifyContent: "center",
	},
	scrol:{
		height: 600,
	}
});

export default styles;
