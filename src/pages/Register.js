import React, { useState } from 'react'
import { register } from '../firebase'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        await register(email,password)
        navigate('/')

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='email'  value={email} onChange={e=>setEmail(e.target.value)} />
            <input type="password" placeholder='şifre' value={password} onChange={e=>setPassword(e.target.value)} />
            <button type='submit'>Kayıt ol</button>
        </form>
    </div>
  )
}

export default Register