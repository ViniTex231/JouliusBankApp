import axios from "axios";
import { createContext, useState, useContext } from "react";
import { Alert } from "react-native";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [jwt, setJwt] = useState(null)
    const [contaC, setConta] = useState(null)
    const [registro, setRegistro] = useState(null)

    const login = (token) => {
        setJwt(token)
    }

    const logout = () => {
        setJwt(null)
    }

    const ativo = (contaC) => {
        setConta(contaC)
    }

    const registroAtivo = (registro) => {
        setRegistro(registro)
    }
    
    return (
        <AuthContext.Provider value={{jwt, contaC, registro, login, logout, ativo, registroAtivo}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export const axiosInstance = axios.create({ 
    baseURL: 'http://10.234.93.57:8000/api/v1/'
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

export async function criarContato(jwt, client, email) {
    try{
        const resposta = await axiosInstance.post('contatos/', {
            id_cliente: client,
            email: email,
        },
        {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
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
            id_conta: conta
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

export async function criarClientePf(jwt, cpf, rg){
    try{
        const resposta = await axiosInstance.post(
        'clientesPF/',
        {
            cpf: cpf,
            rg: rg
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

export async function criarClientePj(jwt, cnpj){
    try{
        const resposta = await axiosInstance.post(
        'clientesPJ/',
        {
            cnpj: cnpj
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

export async function getConta(jwt, contaC){
    try{
        const resposta = await axiosInstance.get(
        `contas/${contaC}/`,
        {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        })
        
        return resposta.data
    } catch (erro){
        console.log(erro)
    }
}

export async function criarPix(jwt, origem, destino, valor){
    try{
        console.log(origem)
        console.log(destino)
        console.log(valor)
        const resposta = await axiosInstance.post(
        'pix/',
        {
            origem: origem,
            destino: destino,
            valor: valor
        },
        {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        })
        return resposta.data
    } catch (erro){
        console.log(erro)
    }
}

export async function criarEmprestimo(jwt, origem, valor){
    try{
        const resposta = await axiosInstance.post(
        'emprestimos/',
        {
            origem: origem,
            valor: valor
        },
        {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        })
        return resposta.data
    } catch (erro){
        Alert.alert("Erro", erro.response.data.error)
    }
}

export async function getPerfil(jwt){
    try{
        const resposta = await axiosInstance.get(
        'auth/users/',
        {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        })
        return resposta.data
    } catch (erro){
        console.log(erro)
    }
}

export async function getMovimentacao(jwt){
    try{
        const resposta = await axiosInstance.get(
        'movimentacoes/',
        {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        })
        return resposta.data
    } catch (erro){
        console.log(erro)
    }
}

export async function getCartao(jwt, contaC){
    try {
        const resposta = await axiosInstance.get(
            `cartoes/?conta=${contaC}`,
            {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            }
        );
        const data = resposta.data;
        
        const mappedCards = data.map((card) => ({
            id: card.id,
            id_conta: card.id_conta,
            numero: card.numero,
            cvv: card.cvv,
            validade: card.validade,
            bandeira: card.bandeira,
            situacao: card.situacao
        }));
        
        return mappedCards;
    } catch (erro){
        console.log(erro);
    }
}

export async function getNome(jwt){
    try {
        const resposta = await axiosInstance.get(
        'auth/users/',
        {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        })
        const data = resposta.data

        const mappedNames = data.map((name)=> ({
            nome_razao_social: name.nome_razao_social,
            nome_social_fantasia: name.nome_social_fantasia,
            foto_logo: name.foto_logo,
            data_nascimento_abertura: name.data_nascimento_abertura,
            registro: data.registro
        }))

        return mappedNames
    } catch (erro){
        console.log(erro)
    }
}