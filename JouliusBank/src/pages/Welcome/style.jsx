import { StyleSheet } from "react-native";

const COLORS = {
  primaryPurple: "#54007C",
  borderPurple: "#A800F9",
  normalWhite: "#fff",
  text: "#a1a1a1",
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: COLORS.primaryPurple,
    },
    containerLogo:{
      flex: 2,
      backgroundColor: COLORS.primaryPurple,
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerForm:{
      flex: 1,
      backgroundColor: COLORS.normalWhite,
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      paddingStart: '5%',
      paddingEnd: '5%',
    },
    title:{
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 28,
      marginBottom: 12,
    },
    text:{
      color: COLORS.text,
    },
    buttonContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '60%',
      alignItems: 'center',
      marginTop: 20,
      marginLeft: '20%',
      
    },
    buttonLogin:{
      backgroundColor: '#d9d9d9',
      borderRadius: 50,
      paddingVertical: 8,
      width: '48%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonConta:{
      backgroundColor: COLORS.borderPurple,
      borderRadius: 50,
      paddingVertical: 8,
      width: '48%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonTextLogin:{
      color: COLORS.primaryPurple,
    },
    buttonTextConta:{
      color: '#000',
    },
    labelPJ:{
      paddingVertical: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textPJ:{
      color: COLORS.text,
    },
})

export default styles

