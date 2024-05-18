import {useForm} from 'react-hook-form'
import SectionContainer from '../components/SectionContainer'
import { UseAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const LoginPage = () => {
    const {register, reset, handleSubmit} = useForm()
    const navigate = useNavigate()
    const {signIn, isAuthenticated} = UseAuth()
  const onSubmit = async (values)=> {
    await signIn(values)
    reset()
    return navigate('/')
  }
  useEffect(()=> {
    if(isAuthenticated){
      return navigate('/')
    }
  }, [isAuthenticated])

  return (
    <SectionContainer>
          <h1 className='text-center text-5xl mt-24 mb-14'>Login</h1>
        <form className='md:w-[700px] flex flex-col items-center justify-center flex-wrap gap-4' onSubmit={handleSubmit(onSubmit)}>
            <input className='border rounded w-[340px] text-xl' {...register('username', {required: true})} type="text" placeholder='username'/>
            <input className='border rounded w-[340px] text-xl' {...register('password', {required: true})} type="password" placeholder='password'/>
            <button className='bg-gray-900 rounded-full w-full sm:w-24 hover:scale-110 transition-all p-1'>Sign In</button>            
        </form>
    </SectionContainer>
  )
}

export default LoginPage
