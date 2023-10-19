import { StyleSheet } from "react-native";

const COLORS = {
  primaryPurple: "#54007C",
  borderPurple: "#A800F9",
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: "5%",
  },
  textDesc:{
    color: "#727272",
  },
  input:{
    opacity: 0.5,
  },
  buttonLogin:{
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
  buttonTextSignUp:{
    color: "#fff",
  },
  buttonText:{
    color: "#fff",
  },
  icon:{
    paddingStart: "3%",
  }
})

export default styles