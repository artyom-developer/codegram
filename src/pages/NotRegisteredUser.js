import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'
 
export const NotRegisteredUser = () => {
    const { registerMutation, error, loading } = useRegisterMutation()
    const { loginMutation, errorLogin, loadLogin } = useLoginMutation()
    const { activateAuth } = useContext(Context);
  
    const onSubmit = ({email, password}) => {
        const input = { email, password }
        const variables = { input }
        registerMutation({ variables })
        .then(({data})=> {
            const { signup } = data
            activateAuth(signup)
        })
    }
    const errorMsg = error && "El usuario ya existe o error";
    const onSubmitLogin = ({email, password}) => {
        const input = { email, password }
        const variables = { input }
        loginMutation({ variables })
        .then(({data})=> {
            const { login } = data 
            activateAuth(login)
        })
    }
    const errorMsg2 = errorLogin && "La contrasena no es correcta o Usuario no existe";
    return (
    <>
        <UserForm onSubmit={onSubmit} title='Registrarse' error={errorMsg} loading={loading}/>
        <UserForm onSubmit={onSubmitLogin} title='Iniciar Sesion' error={errorMsg2} loading={loadLogin}/>
    </>      
    )
}