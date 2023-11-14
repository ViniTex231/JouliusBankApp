import { View, Text, TouchableOpacity, Image, TextInput } from "react-native"
import React, { useEffect, useState } from "react"
import styles from "../Profile/style"
import { FontAwesome } from "@expo/vector-icons"
import axios from "axios"
import * as ImagePicker from 'expo-image-picker'

export default function Profile() {

  const [user_id, setUser_id] = useState(1)
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

  async function adicionar() {
    await addDoc((), {
      photo: nome.replace(/ +/, '') + '_' + image.name,
    })
    setPreview(undefined)
  }


  useEffect(()=>{
    axios.get(`http://10.109.71.15:8000/api/v1/clientes/${user_id}/`)
    .then((res)=>{
      setNome(res.data.nome_razao_social)
    }).catch((erro)=>{
      console.log(erro)
    })
    axios.get(`http://10.109.71.15:8000/api/v1/clientePF/${user_id}/`)
    .then((res)=>{
      setCpf(res.data.cpf)
    }).catch((erro)=>{
      console.log(erro)
    })
    axios.get(`http://10.109.71.15:8000/api/v1/contas/${user_id}/`)
    .then((res)=>{
      setAgencia(res.data.agencia)
      setConta(res.data.conta)
    }).catch((erro)=>{
      console.log(erro)
    })
    axios.get(`http://10.109.71.15:8000/api/v1/contatos/${user_id}/`)
    .then((res)=>{
      setEmail(res.data.email)
    }).catch((erro)=>{
      console.log(erro)
    })
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