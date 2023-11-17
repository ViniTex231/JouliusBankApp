import axios from "axios";
import { createContext, useState, useContext } from "react";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [jwt, setJwt] = useState(null)
    const [conta, setConta] = useState(null)
    const [registro, setRegistro] = useState(null)

    const login = (token) => {
        setJwt(token)
    }

    const logout = () => {
        setJwt(null)
    }

    const ativo = (conta) => {
        setConta(conta)
    }

    const registroAtivo = (registro) => {
        setRegistro(registro)
    }
    
    return (
        <AuthContext.Provider value={{jwt, conta, registro, login, logout, ativo, registroAtivo}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export const axiosInstance = axios.create({ 
    baseURL: 'http://192.168.100.51:8000/api/v1/'
})

export async function criarUsuario(registro, nome_razao_social, nome_social_fantasia, foto_logo, data_nascimento_abertura, password) {
    try{
        const resposta = await axiosInstance.post('auth/users/', {
            registro: registro,
            nome_razao_social: nome_razao_social,
            nome_social_fantasia: nome_social_fantasia,
            foto_logo: foto_logo,
            data_nascimento_abertura: data_nascimento_abertura,
            password: password
        })
        return resposta.status
    } catch (erro) {
        console.log(erro)
    }
}

export async function criarToken(registro, senha, setAuthToken) {
    try {
        const resposta = await axiosInstance.post('auth/jwt/create/', {
            registro: registro,
            password: senha
        })
        setAuthToken(resposta.data.access)
        return{
            status: resposta.status,
            acesso: resposta.data.access
        }
    } catch (error) {
        console.log(error)
    }
}

export async function criarConta(jwt, registro){
    try{
        const resposta = await axiosInstance.post(
        'contas/', 
        {
            registro: registro
        },
        {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        })
        return resposta.data.numero
    } catch (erro) {
        console.log(erro)
    }
}

export async function criarCartao(jwt, conta){
    try{
        const resposta = await axiosInstance.post(
        'cartoes/',
        {
            conta: conta
        },
        {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        })
        return resposta
    } catch (erro){
        console.log(erro)
    }
}