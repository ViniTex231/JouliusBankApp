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
    textAlign: 'right',
    width: "100%",
    height: "10%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingStart: "5%",
  },
  destinyAccount:{
    paddingStart: "5%",
    marginTop: "5%",
    borderBottomColor: COLORS.borderPurple,
    borderBottomWidth: 2,
    width: "28%",
    marginLeft: "5%"
  },
  value:{
    paddingStart: "5%",
    marginTop: "5%",

  },
  textValue:{
    borderBottomColor: COLORS.borderPurple,
    borderBottomWidth: 2,
    width: "30%",
    color: COLORS.subtitle,
  },
  boxValue:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    marginTop: "5%",
    fontSize: 32,
    color: COLORS.normalWhite,
  },
  description:{
    paddingStart: "5%",
    // marginTop: "5%",
  },
  button:{
    backgroundColor: COLORS.primaryPurple,
    width: 94,
    height: 72,
    borderRadius: 10,
    display: 'flex',
    marginTop: "80%",
    marginLeft: "70%",
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default styles