import { createContext, useContext, useEffect, useState } from "react";
import { login, register, validateToken } from '../api/user.api.js'
import Cookies from 'js-cookie'

const AuthContext = createContext()

export const UseAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('auth context should in auth')
    }
    return context
}
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const signIn = async (values) => {
        try {
            const data = await login(values)
            setUser(data)
            setIsAuthenticated(true)
            setLoading(false)
        } catch (error) {
            setIsAuthenticated(false)
            setLoading(false)
        }
    }
    const signUp = async (values) => {
        try {
            const data = await register(values)
            return data;
        } catch (error) {
            return console.log(error)
        }
    }
    const logOut = async ()=> {
        try {
            Cookies.remove('token')
            setIsAuthenticated(false)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const validateUser = async () => {
        try {
            const res = await validateToken()
            if(res.status === 200){
                setLoading(false)
                setUser(res.data.user)
                return setIsAuthenticated(true)
            }
            setLoading(false)
            setIsAuthenticated(false)
        } catch (error) {
            setLoading(false)
            setIsAuthenticated(false)
        }
    }
    useEffect(()=> {
        validateUser()
    }, [])
    return (
        <AuthContext.Provider
            value={{ signIn, validateUser, signUp, user, loading, isAuthenticated, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}