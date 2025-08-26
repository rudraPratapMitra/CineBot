import { useRef, useState } from "react";
import Header from "./Header";
import validateForm from "../Utils/validateForm";
import { auth } from "../Utils/firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { signInReducer } from "../Utils/userSlice";
import { getAvatarUrl, NETFLIX_COVER } from "../Utils/constants";

function Login(){

    const [isSignInForm,setSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null)
    const dispatch=useDispatch();
    const email=useRef(null)
    const password=useRef(null)
    const fullName=useRef(null) 

    const handleFormValidation=()=>{
        const message=validateForm(email.current.value,password.current.value)
        setErrorMessage(message);

        if(message) return;
    
        if(!isSignInForm){
            //sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                //if the response is sucess we will get a user object
                const user = userCredential.user;
                const avatarUrl = getAvatarUrl(fullName.current.value);
                updateProfile(user, {
                    displayName: fullName.current.value,
                    photoURL: avatarUrl,
                })
                    .then(() => {
                        // Dispatch Redux update immediately
                        const {uid,displayName,email,photoURL} = auth.currentUser;
                        dispatch(  
                            signInReducer({
                                uid: uid,
                                displayName: displayName,
                                email: email,
                                photoURL:photoURL,
                            })
                            
                        );
                    })
                    .catch((error) => {
                        console.error("Error updating profile:", error);
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
            });
        }else{
            //sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
            });
        }
    }
    return (
        <div className="relative h-screen w-full">
            <Header />
            {/* Cover image */}
            <img 
                className="h-screen w-full object-cover"
                src={NETFLIX_COVER}
                alt="netflix-wall"
            />
            {/*Gradient*/}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black"></div>
            {/*Form*/}
            <div className="absolute inset-0 flex items-center justify-center z-10 text-white">
                <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 bg-black/60 p-8 rounded">
                    <h1 className="text-3xl font-bold mb-6">{isSignInForm?"Sign In":"Sign Up"}</h1>
                    {!isSignInForm &&<input ref={fullName} type="text" placeholder="Full Name" className="p-4 my-4 w-full border border-gray-700 rounded" />}
                    <input  ref={email} type="text" placeholder="Email Address"  className="p-4 my-4 w-full border border-gray-700 rounded" />
                    <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full border border-gray-700 rounded" />
                    <button 
                    className="p-4 my-4 w-full bg-red-600 text-white font-bold rounded cursor-pointer hover:bg-red-700"
                    onClick={handleFormValidation}>
                        {isSignInForm?"Sign In":"Sign Up"}
                    </button>
                    <p className="py-2  font-bold text-red-600">{errorMessage}</p>
                    <div>
                       {isSignInForm? 
                       <div>  
                            <span className="font-monospace">New to CineBot? </span> 
                            <span 
                                className="cursor-pointer font-bold underline"
                                onClick={()=>setSignInForm(!isSignInForm)}>Sign up Now.
                            </span>
                        </div>:
                        <div>
                            <span className="font-monospace">Already a User? </span> 
                            <span 
                                className="cursor-pointer font-bold underline"
                                onClick={()=>setSignInForm(!isSignInForm)}>Sign In.
                            </span>
                        </div>
                      
                        }
                    </div>
                </form>
            </div>
    
        </div>
    )
}

export default Login;



