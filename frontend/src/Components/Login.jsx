import { useRef, useState } from "react";
import Header from "./Header";
import validateForm from "../Utils/validateForm";
import { auth } from "../Utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { signInReducer } from "../Utils/userSlice";
import { getAvatarUrl, NETFLIX_COVER } from "../Utils/constants";

function Login() {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleFormValidation = () => {
    const message = validateForm(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          const avatarUrl = getAvatarUrl(fullName.current.value);
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: avatarUrl,
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                signInReducer({
                  uid,
                  displayName,
                  email,
                  photoURL,
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
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      <Header />

      {/* Cover image as full background */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={NETFLIX_COVER}
          alt="netflix-wall"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black"></div>
      </div>

      {/* Form */}
      <div className="relative flex items-center justify-center min-h-screen z-10 text-white px-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="
            w-11/12      /* mobile: almost full width */
            sm:w-8/12    /* small screens ≥640px: 66% */
            md:w-6/12    /* medium screens ≥768px: 50% */
            lg:w-3/12    /* large screens ≥1024px: 25% */
            max-w-md     /* don’t let it grow too big */
            bg-black/60 p-6 sm:p-8 rounded
          "
        >
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={fullName}
              type="text"
              placeholder="Full Name"
              className="p-3 sm:p-4 my-3 w-full border border-gray-700 rounded bg-black/40 placeholder-gray-400"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 sm:p-4 my-3 w-full border border-gray-700 rounded bg-black/40 placeholder-gray-400"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 sm:p-4 my-3 w-full border border-gray-700 rounded bg-black/40 placeholder-gray-400"
          />

          <button
            className="p-3 sm:p-4 my-3 w-full bg-red-600 text-white font-bold rounded cursor-pointer hover:bg-red-700"
            onClick={handleFormValidation}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="py-2 font-bold text-red-600 text-sm sm:text-base">{errorMessage}</p>

          <div className="text-sm sm:text-base">
            {isSignInForm ? (
              <div>
                <span className="font-monospace">New to CineBot? </span>
                <span
                  className="cursor-pointer font-bold underline"
                  onClick={() => setSignInForm(!isSignInForm)}
                >
                  Sign up Now.
                </span>
              </div>
            ) : (
              <div>
                <span className="font-monospace">Already a User? </span>
                <span
                  className="cursor-pointer font-bold underline"
                  onClick={() => setSignInForm(!isSignInForm)}
                >
                  Sign In.
                </span>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
