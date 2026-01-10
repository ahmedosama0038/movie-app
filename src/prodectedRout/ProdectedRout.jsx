import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Navigate } from "react-router-dom"


export default function ProdectedRout(children) {
 const { token}  = useContext(AuthContext)

if(token){
 return children

}else{
    <Navigate to={'login'}/>
}

 
   
  
}
