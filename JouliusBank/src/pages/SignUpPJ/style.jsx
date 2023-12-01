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
    backgroundColor: COLORS.background
  },
  containerSignUp:{
    width: "100%",
    height: "40%",
    backgroundColor: COLORS.primaryPurple,
  },
  containerImage:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primaryPurple,
  },
  textContainer:{
    paddingStart: "5%",
    backgroundColor: COLORS.primaryPurple,
  },
  textSignUp:{
    color: "#fff",
    fontSize: 24,
    paddingBottom: "5%",
  },
  containerForm:{
    flex: 1,
    paddingStart: "5%",
    paddingEnd: "5%",
    marginTop: "2%",
  },
  InputView:{
    borderBottomColor: COLORS.borderPurple,
    borderBottomWidth: 2,
    width: "30%",
    marginTop: "3%",
  },
  textDesc:{
    color: COLORS.normalWhite,
  },
  input:{
    opacity: 0.5,
    color: COLORS.subtitle,
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    left: 0,
    right: 0,
    backgroundColor: COLORS.primaryPurple,
    borderRadius: 10,
    paddingVertical: 8,
    width: 200,
  },
  buttonText:{
    color: COLORS.normalWhite,
  },
  buttonLogin:{
    backgroundColor: COLORS.primaryPurple,
    borderRadius: 10,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    width: 200,
  },
  buttonTextSignUp:{
    color: COLORS.normalWhite,
  },
  icon:{
    paddingStart: "3%",
  }
})

export default styles