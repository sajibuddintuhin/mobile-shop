import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase";

export const AuthProvider = createContext();

// eslint-disable-next-line react/prop-types
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const signInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const userRegistration = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userUpDate = (name) => {
    console.log(name);
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const info = {
    userRegistration,
    user,
    logOut,
    userLogin,
    loading,
    signInGoogle,
    userUpDate,
  };
  return <AuthProvider.Provider value={info}>{children}</AuthProvider.Provider>;
};

export default AuthContext;
