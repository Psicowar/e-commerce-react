import React from 'react'
import { Navigate } from 'react-router'
import { useAuthUser } from '../context/AuthUserContext/AuthUserContext'

const PrivateRoute = ({children}) => {
    const {authState} = useAuthUser()
    return authState.isAuthenticated ? children : <Navigate to = "/" />
}

export default PrivateRoute