import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function AuthROUR({children}) {
 const { token}  =    useContext(AuthContext)
 if (token) {
 return   <Navigate to={'/'}/>
 }else{
return children
 }
}
