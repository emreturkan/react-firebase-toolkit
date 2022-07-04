import React,{useState} from 'react'
import { signin } from '../firebase'
import { login } from '../store/auth'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = async(e)=>{
        e.preventDefault()
         const user  = await signin(email,password)
        dispatch(login(user))
        navigate('/')
    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder='email'  value={email} onChange={e=>setEmail(e.target.value)} />
            <input type="password" placeholder='şifre' value={password} onChange={e=>setPassword(e.target.value)} />
            <button type='submit'>Girş Yap</button>
        </form>
    </div>
  )
}

export default Login