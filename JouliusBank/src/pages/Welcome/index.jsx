import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

export default function Welcome({ navigation }) {
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
          <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.buttonTextLogin}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonConta} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.buttonTextConta}>Abra sua Conta</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.labelPJ}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpPJ')}>
            <Text style={styles.textPJ}>Abrir Conta PJ</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

