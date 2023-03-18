"use client";

import { useState, createContext } from "react";

const user = {
  id: "",
  firstName: "",
  lastName: "",
  emial: "",
  city: "",
  phone: "",
};

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const mergeAuthState = (newState) => {
  return {
    ...initialState,
    ...newState,
  };
};

const authState = {
  ...initialState,
  setAuthState,
};

const AuthenticationContext = createContext({
  loading: false,
  error: null,
  data: null,
  // setAuthState: () => {},
});

export default function AuthContext({ children }) {
  const [authState, setAuthState] = useState({
    loading: false,
    data: null,
    error: null,
  });
  return (
    <AuthenticationContext.Provider value={authState}>
      {children}
    </AuthenticationContext.Provider>
  );
}
