import { View, Text, TouchableOpacity, Image, TextInput } from "react-native"
import React, { useEffect, useState } from "react"
import styles from "../Profile/style"
import { FontAwesome } from "@expo/vector-icons"
import axios from "axios"
import * as ImagePicker from 'expo-image-picker'
import { useAuth } from "../../services/api"

export default function Profile() {

  const {jwt, registroAtivo, contaC} = useAuth()
  const [nome, setNome] = useState("")
  const [cpf, setCpf] = useState("")
  const [agencia, setAgencia] = useState(0)
  const [conta, setConta] = useState(0)
  const [email, setEmail] = useState("")
  const [image, setImage] = useState("")
  const [preview, setPreview] = useState("")

  const gallery = async ()=>{
    const result = ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
    console.log((await result).assets[0].uri)

    if (!(await result).canceled) {
      setPreview((await result).assets[0].uri)
    }
  }

  useEffect(() => {
    if (!image){
      setImage(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(image)
    setPreview(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [image])


  useEffect(()=>{
    const fetchUserData = async () => {
      try {
        const conta1 = await getConta(jwt, contaC)
        setNome(conta1.nome)
        setAgencia(conta1.agencia)
        setConta(conta1.conta)
        setEmail(conta1.email)
        setCpf(conta1.cpf)
      } catch (err) {
        console.log("FETCH nome, agencia, conta, email, cpf DATA err", err)
      }
    }
    fetchUserData()
  }, [])

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity>
            <FontAwesome 
              name="arrow-left"
              size={30}
              color={"#000"}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={{width: "40%"}}>
          <Image 
            source={require("../../assets/iconeLogo.png")}
            style={{width: "100%"}}
            resizeMode="contain"
          />
        </View>
      </View>

      <View style={styles.formPic}>
        <View style={styles.pic}>
          
        </View>
        <TouchableOpacity>
          <Text style={styles.textPic}>Alterar foto</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileHeader}>
        <Text style={styles.textProfile}>Seus Dados</Text>

        <View style={styles.profileDetails}>
          <Text>Nome</Text>
          <Text>{nome}</Text>
        </View>

        <View style={styles.profileDetails}>
          <Text>CPF</Text>
          <Text>{cpf}</Text>
        </View>

        <View style={styles.profileDetails}>
          <Text>Agência</Text>
          <Text>{agencia}</Text>
        </View>

        <View style={styles.profileDetails}>
          <Text>Conta</Text>
          <Text>{conta}</Text>
        </View>

        <View style={styles.profileDetails}>
          <Text>Email</Text>
          <Text>{email}</Text>
        </View>
      </View>

    </View>
  )
}