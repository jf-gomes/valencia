import React, { createContext, useState } from 'react'

export const AuthContext = createContext({})

export default function AuthProvider({ children }){

    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    return (
        <AuthContext.Provider value={{cartItems, setCartItems, totalPrice, setTotalPrice}}>
            {children}
        </AuthContext.Provider>
    )
}