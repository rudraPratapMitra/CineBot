import {useEffect, useState } from "react";
import {useDispatch, useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";
import {auth} from "../Utils/firebase"
import {onAuthStateChanged, signOut } from "firebase/auth";
import { signInReducer,signOutReducer } from "../Utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../Utils/constants";
import { toggleGptSearchView } from "../Utils/GptSlice";
import { setLanguage } from "../Utils/langSlice";

function Header() {
    const userObject = useSelector((state) => state.user);
    const [isDropdownOpen,setDropdown]=useState(false);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const showGptView=useSelector((store)=>store.gpt.showGptView)
    const language=useSelector((store)=>store.language.language)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid,displayName,email,photoURL} = user;
            dispatch(
                signInReducer({
                    uid,
                    displayName,
                    email,
                    photoURL
                })
            )
            navigate("/browse")
        } 
        else {
            dispatch(signOutReducer());
            navigate("/")
        }
        });
        return ()=>unsubscribe();
    },[])
    

  return (
    <div className="absolute px-12 py-6 z-50 w-full flex flex-col md:flex-row  justify-between items-center">
      {/* Netflix Logo */}
      <img
        className="w-48 drop-shadow-lg"
        src={LOGO}
        alt="netflix-logo"
      />

      {/* User Avatar + Dropdown */}
      {userObject && (
        <div className="flex flex-col items-center space-x-2">
          <div className="flex space-x-2">
            {showGptView&&<select 
            className="bg-black/50 text-white px-2"
            value={language} 
            onChange={(e) => dispatch(setLanguage(e.target.value))}
            >
              {SUPPORTED_LANGUAGES.map((lang)=>{
                return(
                <option key={lang.value} value={lang.value}>{lang.name}</option>
                )
              })}
            </select>}
            <button 
              className=" bg-violet-700 border cursor-pointer shadow-sm hover:scale-105 border-white text-white py-2 px-2 rounded-lg"
              onClick={()=>{
                dispatch(toggleGptSearchView());
              }}>
             {showGptView?"Home":"AskGpt" }
            </button>
            <img
              src={userObject.photoURL}
              alt="user-avatar"
              className="w-10 h-10 rounded-b-sm border-2 border-white shadow-sm hover:scale-105  cursor-pointer"
              onClick={()=>{
                  setDropdown(!isDropdownOpen)
              }}
            />
          </div>
         
          {isDropdownOpen&&(
            <div className=" m-2 px-2 py-2 bg-black/60 text-white">
                <ul>
                    <li className="cursor-pointer"
                     onClick={() => {
                        signOut(auth).catch((error) => {
                            console.error("Sign out error:", error);
                        });
                    }}
                    >
                    Sign Out
                    </li>
                </ul>
            </div>
          )}


        </div>
      )}
    </div>
  );
}

export default Header;



