import { Navigate, Outlet } from "react-router-dom"
import { UseAuth } from "../context/AuthContext"

const ValidateSession = () => {
  const {isAuthenticated, loading} = UseAuth()

  if(loading){
    return <div>loading...</div>
  }
  if(!isAuthenticated && !loading){
    return <Navigate to={'/login'}/>
  }

  return (
    <Outlet/>
  )
}

export default ValidateSession
