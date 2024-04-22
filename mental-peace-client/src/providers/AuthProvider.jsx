import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useReducer, createContext, useEffect } from "react";
import { auth } from "../firebase/firebase.config";

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        user: {
          name: action.name,
          email: action.email,
          image: action.image,
          role: action.role,
        },
        isLoading: false,
        isError: false,
        error: "",
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isLoading: false,
        isError: false,
        error: "",
      };
    case "FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "LOADED":
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const signUp = (email, password) => {
    dispatch({ type: "LOADING" });
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    dispatch({ type: "LOADING" });
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    dispatch({ type: "LOADING" });
    return signOut(auth);
  };

  const authInfo = {
    ...state,
    signUp,
    login,
    logOut,
  };

  useEffect(() => {
    dispatch({ type: "LOADING" });
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: "SUCCESS",
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
          role: user.role,
        });
        console.log("User logged in");
      } else {
        dispatch({ type: "LOGOUT" });
        console.log("User logged out");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={[authInfo, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
