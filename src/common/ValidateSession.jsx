import { Navigate, Outlet } from "react-router-dom"
import { UseAuth } from "../context/authContext"

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
