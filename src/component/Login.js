import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidate } from "../utils/validate"

const Login =()=>{
    const [signing,setSigning] = useState(true)
    const email = useRef(null)
    const password = useRef(null)

    const handlebutton =()=>{
        
        console.log('email',email)
        console.log('password',password);
        const message = checkValidate(email.current.value,password.current.value)
        console.log(message)

    }


    const handlesign=()=>{
        setSigning(!signing)

    }

    return(
        <div >
            <Header/>
            <div className="absolute ">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                alt="bg"/>
            </div>
            <form onSubmit={(e)=>e.preventDefault()}  className="w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-2xl">{signing ?'Sign in':'Sign up'} </h1>
                {!signing &&(<input type="text" className="p-4 my-4 w-full bg-gray-800 " placeholder="email"/>)}
                <input ref={email} type="text" className="p-4 my-4 w-full bg-gray-800 " placeholder="email"/>
                <input ref={password} type="text" className="p-4 my-4 w-full bg-gray-800 " placeholder="password"/>
                <button className="bg-red-500 w-full p-4 my-6 rounded-lg" onClick={handlebutton} >Submit</button>
                <h1 className="cursor-pointer" onClick={handlesign} >{signing?'new to netflix? sign up now':'already registered?sign in'}</h1>
            </form>
        </div>
    )
}

export default Login