import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { logout } from '../firebase'
import { logout as logoutHandle } from '../store/auth'

const Home = () => {
    const user = useSelector(state=>state.auth.user)
    const dispatch = useDispatch()
    const buttonHandle =async(e)=>{
      await logout()
      dispatch(logoutHandle())
    }
  if(user){
    return(
    <div>
        <h1>Hoşgeldin ({user.email})</h1>
        <button onClick={buttonHandle}>Çıkış Yap!</button>
    </div>
    )
  }
  
    return (
        <div>
            <Link to='/register'>Kayıt ol</Link>
            <Link to='/login'>Giriş Yap</Link>
        </div>
      )
  
}

export default Home