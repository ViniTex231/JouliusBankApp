import { View, Text, TouchableOpacity, Image, TextInput } from "react-native"
import React, { useEffect, useState } from "react"
import styles from "../Profile/style"
import { FontAwesome } from "@expo/vector-icons"
import * as ImagePicker from 'expo-image-picker'
import { getConta, useAuth, getNome, getPerfil, putImagem } from "../../services/api"

export default function Profile({ navigation }){

  const {jwt, registroAtivo, registro, contaC} = useAuth()
  const [nome, setNome] = useState("")
  const [cpf, setCpf] = useState("")
  const [agencia, setAgencia] = useState(0)
  const [conta, setConta] = useState(0)
  const [email, setEmail] = useState("")
  const [image, setImage] = useState(null)

  useEffect(()=>{
    const fetchUserData = async () => {
      try {
        const conta1 = await getConta(jwt, contaC)
        setAgencia(conta1.agencia)
        setConta(conta1.numero)
        setEmail(conta1.email)
      } catch (err) {
        console.log("FETCH, agencia, conta, email, DATA err", err)
      }
    }
    fetchUserData()
  }, [])
  

  useEffect(()=>{
    const fetchUserData = async () => {
      try {
        const conta1 = await getPerfil(jwt)
        setCpf(conta1[0].registro)
        setNome(conta1[0].nome_razao_social)
        setImage(conta1[0].foto_logo)

        const image = await putImagem(jwt)

      } catch (err) {
        console.log("FETCH cpf DATA err", err)
      }
    }
    fetchUserData()
  }, [])

  const handleImagePicker = async () => {
    console.log("aaa")
    const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: false,
      aspect: [4, 4],
      quality: 1,
    });
  
    if (!canceled) {
      const filename = assets[0].uri.substring(
        assets[0].uri.lastIndexOf("/") + 1,
        assets[0].uri.length
      );
      const extend = filename.split(".")[1];
      const formData = new FormData();
      formData.append(
        "foto_logo",
        {
          name: filename,
          uri: assets[0].uri,
          type: "image/" + extend,
        }
      );
      
      console.log("pegar img"+formData)
      setImage(formData);
      };
    }

  
  const submit = async () => {
    const response = putImagem(jwt, image, registro)
    console.log("resposta"+response)
  }
  
 

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Main")}>
            <FontAwesome 
              name="arrow-left"
              size={30}
              color={"#000"}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={{width: "40%"}}>
        </View>
      </View>

      <View style={styles.formPic}>
        <View style={styles.pic}>
          <Image 
            source={{uri: image}}
            style={{width: 238, height: 238, borderRadius: 100}}
            resizeMode="contain"
          />
          
        </View>
        <TouchableOpacity onPress={() => handleImagePicker()}>
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

        <View style={styles.buttonView}>
						<TouchableOpacity
							style={styles.buttonLogin}
							onPress={() => submit()}
						>
							<Text style={styles.buttonText}>Atualizar</Text>
						</TouchableOpacity>
					</View>

      </View>

    </View>
  )
}





