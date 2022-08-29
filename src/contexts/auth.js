import React, { createContext, useState,useEffect } from 'react';
import io from 'socket.io-client';
import userAuth from './hooks/userAuth';
import api from '../services/api';
const socket = io.connect("http://158.69.235.254:4000");   //http://localhost:4000
export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [isUpdate, setIsUpdate] = useState(false);
    const [isMenu, setIsMenu] = useState(false);
    const [route, setRoute] = useState('Dashboard');

    const {
        id,
        auth,
        setAuth,
        authenticated,
        leading,
        signIn,
        signOut
    } = userAuth();

    useEffect(() => {
        async function Auth() {
            if (!leading) {
                await api.post('/auth', { id: id }).then(res => {
                    res.data.forEach(person => {
                        setAuth(person);
                    })
                }).catch(err => {
                    const { isAuth } = err.response.data;
                    if (!isAuth) {
                        signOut();
                    };
                });
            }
        };
        Auth()
    }, [id, leading, setAuth, signOut]);

    return (
        <AuthContext.Provider value={{
            signed: authenticated,
            id,
            auth,
            authenticated,
            leading,
            signIn,
            signOut,
            isUpdate,
            setIsUpdate,
            isMenu,
            setIsMenu,
            route,
            setRoute
        }}>
            {children}

        </AuthContext.Provider>
    );
}
