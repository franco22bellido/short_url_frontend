import {useForm} from 'react-hook-form'
import SectionContainer from '../components/SectionContainer'
const RegisterPage = () => {
  const {register, reset, handleSubmit} = useForm()

  const onSubmit = ()=> {
    reset()
  }
  return (
    <SectionContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name', {required: true})} type="text" placeholder='name'/>
            <input {...register('username', {required: true})} type="text" placeholder='username'/>
            <input {...register('password', {required: true})} type="text" placeholder='password'/>
            <button>Sign Up</button>            
        </form>
    </SectionContainer>
  )
}

export default RegisterPage
