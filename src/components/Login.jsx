import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_large.jpg')] w-full  bg-cover  bg-center">
      <Header />
      <div className="flex justify-center items-center pt-32">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="md:w-3/12 w-[90%]  p-16 bg-black bg-opacity-80   rounded-lg text-white items-center"
          action=""
        >
          <h3 className="text-white text-3xl font-semibold mb-8">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h3>
          {!isSignInForm && (
            <input
              ref={name}
              className="p-4 mb-8  w-full bg-[rgba(31,44,63,0.62)] rounded-md "
              type="text"
              placeholder="Full Name"
              name=""
              id="name"
            />
          )}
          <input
            ref={email}
            className="p-4 mb-8  w-full bg-[rgba(31,44,63,0.62)] rounded-md "
            type="text"
            placeholder="Email Address"
            name=""
            id="email"
          />
          <input
            ref={password}
            className="p-4 mb-2 w-full bg-[rgba(31,44,63,0.62)] rounded-md"
            type="password"
            placeholder="Password"
            name=""
            id="password"
          />
          <p className="text-red-600 text-sm mb-6">{errorMessage}</p>
          <button
            onClick={handleButtonClick}
            className="px-4 mb-4 py-2 rounded-md bg-red-500 w-full text-center text-white text-xl"
          >
            {isSignInForm ? " Sign In" : "Sign Up"}
          </button>

          <p className="py-4" onClick={toggleSignInForm}>
            <span className="opacity-75">
              {isSignInForm ? "New to Netflix?" : "Already registered? "}
            </span>
            <span className="hover:underline cursor-pointer ">
              {isSignInForm ? " Sign Up" : " Sign In"} Now
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
