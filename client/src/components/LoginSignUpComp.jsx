import React, { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'

const Signup = () => {

    const [signUpinfo, setSignupInfo] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handelSignup = async () => {
        try {

            let result = await axios.post("http://localhost:3000/api/signup", {
                name: signUpinfo.name,
                email: signUpinfo.email,
                password: signUpinfo.password
            }, { withCredentials: true })

            toast.success(result.data.message)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='h-[320px] w-[30vw] transition bg-gray-200 flex flex-col  p-5 gap-1 rounded-xl shadow-2xl shadow-gray-600'>
            <div className='w-full'>
                <label htmlFor='name'>Name:</label>
                <br></br>
                <input value={signUpinfo.name} onChange={(e) => setSignupInfo({ ...signUpinfo, name: e.target.value })} required id='name' type='text' placeholder='Name ' className='bg-gray-400 border-bottom w-full' />
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <br></br>
                <input value={signUpinfo.email} onChange={(e) => setSignupInfo({ ...signUpinfo, email: e.target.value })} required id='email' type='email' placeholder='email ' className='bg-gray-400 border-bottom w-full' />
            </div>
            <div>
                <label htmlFor='pass'>Password:</label>
                <br></br>
                <input value={signUpinfo.password} onChange={(e) => setSignupInfo({ ...signUpinfo, password: e.target.value })} required id="pass" type='password' placeholder='password' className='bg-gray-400 border-bottom  w-full' />
            </div>
            <button className='bg-sky-400 py-[10px] px-[80px] mt-5 cursor-pointer' onClick={() => { handelSignup() }}>Signup</button>
        </div>
    )
}


const Login = () => {

    const [LogIninfo, setLogInInfo] = useState({
        email: "",
        password: ""
    })

    const handelLogin = async () => {
        try {

            let result = await axios.post("http://localhost:3000/api/login", {
                email: LogIninfo.email,
                password: LogIninfo.password
            }, { withCredentials: true })

            toast.success(result.data.message)

        } catch (error) {

        }
    }


    return (
        <div className='h-[320px] w-[30vw] bg-gray-200 flex flex-col  p-5 gap-1 rounded-xl shadow-2xl shadow-gray-600'>
            <div>
                <label htmlFor='email'>Email:</label>
                <br></br>
                <input value={LogIninfo.email} onChange={(e) => setLogInInfo({ ...LogIninfo, email: e.target.value })} required id='email' type='email' placeholder='email ' className='bg-gray-400 border-bottom w-full' />
            </div>
            <div>
                <label htmlFor='pass'>Password:</label>
                <br></br>
                <input value={LogIninfo.password} onChange={(e) => setLogInInfo({ ...LogIninfo, password: e.target.value })} required id="pass" type='password' placeholder='password' className='bg-gray-400 border-bottom  w-full' />
            </div>
            <button className='bg-sky-400 py-[10px] px-[80px] mt-5' onClick={()=>handelLogin()}>Login</button>
        </div>
    )
}


export { Signup, Login }