import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const Authcontext = createContext(null);
const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

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

  const updateprofile = (name, photo) => {
    console.log(name,photo)
    return updateProfile(auth.currentUser,{
      displayName: name, photoURL: photo
    })
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      console.log("currentuser", currentuser);
      setLoading(false);
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
    updateprofile,
    googlelogin
  };

  return (
    <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
  );
};

export default Authprovider;
