import Login from "./Login"
import Browse from "./Browse"
import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux"
import { adduser, removeuser } from "../utils/userSlice"
import { auth } from "../utils/firebase"

const Body =()=>{

    const dispatch = useDispatch()
    

    const Approuter = createBrowserRouter([
        {
            path:'/',
            element:<Login/>,
        },
        {
            path:'/browse',
            element:<Browse/>,
        }
    ])
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayname} = user.uid;
              dispatch(adduser({uid:uid,email:email,diaplayname:displayname}))
              
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeuser)
              
            }
          });
    },[])


    return(
        <div>
            <RouterProvider router={Approuter}/>

        </div>
    )
}

export default Body