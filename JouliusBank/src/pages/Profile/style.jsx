import { StyleSheet } from "react-native"

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
    paddingStart: '5%'
  },
  formPic:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  pic:{
    width: 238,
    height: 238,
    borderRadius: 100,
  },
  textPic:{
    marginTop: 10,
    fontSize: 16,
    color: COLORS.subtitle,
  },
  profileHeader:{
    marginTop: 30,
    paddingStart: '5%',
    display: 'flex',
    flexDirection: 'column'
  },
  textProfile:{
    borderBottomColor: COLORS.borderPurple,
    borderBottomWidth: 2,
    width: '30%',
    color: COLORS.subtitle,
  },
  profileDetails:{
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingEnd: 10,
  },
  buttonView:{
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLogin:{
    backgroundColor: COLORS.primaryPurple,
    borderRadius: 10,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    width: 200,
  },
  buttonText:{
    color: COLORS.normalWhite,
  }
})

export default styles