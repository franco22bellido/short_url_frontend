import { createContext, useContext, useEffect, useState } from "react";
import { login, register, validateToken } from '../api/user.api.js'

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
    const [errors, setErrors] = useState([])

    const signIn = async (values) => {
        try {
            setLoading(true)
            const data = await login(values)
            window.localStorage.setItem('authorization', data.authorization)
            setUser(data)
            setIsAuthenticated(true)
            setLoading(false)
        } catch (error) {
            if (!Array.isArray(error.response.data)) {
                setErrors([error.response.data.message])
            } else {
                setErrors(error.response.data)
            }
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
    const logOut = async () => {
        try {
            window.localStorage.removeItem('authorization')
            setIsAuthenticated(false)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const validateUser = async () => {
        try {
            await validateToken()
            setLoading(false)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error)
            setLoading(false)
            setIsAuthenticated(false)
        }
    }
    useEffect(() => {
        validateUser()
    }, [])
    useEffect(() => {
        if (errors.length > 0) {
            setTimeout(() => {
                setErrors([])
            }, 3500)
        }
    }, [errors])
    return (
        <AuthContext.Provider
            value={{ signIn, validateUser, signUp, user, loading, isAuthenticated, logOut, errors, setErrors }}>
            {children}
        </AuthContext.Provider>
    )
}