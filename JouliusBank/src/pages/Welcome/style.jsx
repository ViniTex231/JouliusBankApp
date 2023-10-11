import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#54007C',
    },
    containerLogo:{
      flex: 2,
      backgroundColor: '#54007C',
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerForm:{
      flex: 1,
      backgroundColor: '#fff',
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
      color: '#a1a1a1',
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
      backgroundColor: '#A800F9',
      borderRadius: 50,
      paddingVertical: 8,
      width: '48%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonTextLogin:{
      color: '#54007c',
    },
    buttonTextConta:{
      color: '#000',
    },
})

export default styles

