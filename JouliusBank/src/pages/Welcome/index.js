import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Welcome() {
  return (
    <View style={styles.container}>

      <View style={styles.containerLogo}> 
        <Image
          source={require('../../assets/logowelcome.png')}
          style={{ width: '100%' }}
          resizeMode='contain'
        />
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Monitore, organize seus gastos de qualquer lugar!</Text>
        <Text style={styles.text}>Faça o login para começar</Text>


        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonTextLogin}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonConta}>
            <Text style={styles.buttonTextConta}>Abra sua Conta</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

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
  }
})