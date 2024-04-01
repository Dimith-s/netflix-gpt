import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidate } from "../utils/validate"
import { auth } from "../utils/firebase"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"

const Login =()=>{
    const [signing,setSigning] = useState(true)
    const email = useRef(null)
    const password = useRef(null)
    const [errormsg,setErrormsg] = useState(null)
    const navigate = useNavigate()

    const handlebutton =()=>{
        
        console.log('email',email)
        console.log('password',password);
        const message = checkValidate(email.current.value,password.current.value)
        
        setErrormsg(message)
        if (message) return

        if (!signing){
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                navigate('/browse')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrormsg(errorCode+errorMessage)
                // ..
            });
        }else{
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate('/browse')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode+errorMessage);
  });

        }

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
                <p className="text-red-600 font-bold py-2 " >{errormsg}</p>
                <button className="bg-red-500 w-full p-4 my-6 rounded-lg" onClick={handlebutton} >Submit</button>
                <h1 className="cursor-pointer" onClick={handlesign} >{signing?'new to netflix? sign up now':'already registered?sign in'}</h1>
            </form>
        </div>
    )
}

export default Login