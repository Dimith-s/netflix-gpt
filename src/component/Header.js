import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ()=>{
    const navigate = useNavigate()
    const user = useSelector((store)=>store.user)
    const handlesignout=()=>{
        
        signOut(auth).then(() => {
        // Sign-out successful.
        navigate('/')
        }).catch((error) => {
        // An error happened.
        navigate('/error')
        });
    }


    return(
        <div className="absolute px-8 py-2 bg-gradient-to-b w-full from-black z-10 flex justify-between"  >
            <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="loge"/>
           { user && <div className="flex">
                <button className="bg-red-400 mt-4 mb-4 px-2 rounded-lg font-bold text-white " onClick={handlesignout} >sign out</button>
            </div>}
        </div>
       
    )
}

export default Header