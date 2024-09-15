import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useaxiospublic from "../hooks/useaxiospublic";

export const Authcontext = createContext(null);
const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useaxiospublic()

  const googlelogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}

  const createuser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logout = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      if(currentuser){
        const userInfo = {email: currentuser.email}
        axiosPublic.post('/jwt', userInfo)
        .then(res => {
          if(res.data.token){
            localStorage.setItem('access-token', res.data.token)
            setLoading(false);
          }
        })
      }
      else{
        localStorage.removeItem('access-token')
        setLoading(false);
      }
      console.log("currentuser", currentuser);
    });
    return () => {
      return unSubscribe();
    };
  });

  const authinfo = {
    user,
    loading,
    createuser,
    signin,
    logout,
    googlelogin
  };

  return (
    <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
  );
};

export default Authprovider;
