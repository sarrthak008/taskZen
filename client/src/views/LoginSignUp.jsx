import React, { useState } from 'react'

import { Login ,Signup} from '../components/LoginSignUpComp'

const LoginSignUp = () => {

    const [isLoginOpen , setIsLoginOpen] = useState(true)

  return (
    <div className='h-screen w-screen overflow-hidden flex items-center justify-center flex-col'>
        <div className='flex gap-[40px] fixed top-[10%] '>
            <span className='text-xl font-medium cursor-pointer' onClick={()=>setIsLoginOpen(true)}>Login </span>
            <span className='text-xl font-medium cursor-pointer' onClick={()=>setIsLoginOpen(false)}>Signup</span>
        </div>
        {
            isLoginOpen ? <Login/> : <Signup/>
        }
    </div>
  )
}

export default LoginSignUp