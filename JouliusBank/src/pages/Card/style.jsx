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
    textAlign: 'right',
    width: "100%",
    height: "5%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingStart: "5%"
  },
  icon:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardHeader:{
    paddingStart: "5%",
    display: 'flex',
    flexDirection: 'column',
  },
  limitHeader:{
    paddingTop: "5%",
    paddingStart: "5%",
    display: 'flex',
    flexDirection: 'column',
  },
  textCard:{
    borderBottomColor: COLORS.borderPurple,
    borderBottomWidth: 2,
    width: "30%",
    color: "#a1a1a1",
  },
  cardDetails:{
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingEnd: 10,
  },
  button:{
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default styles