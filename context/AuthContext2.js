import axios from "axios";
// import { getCookie } from "cookies-next";
import React, { useState, createContext, useEffect } from "react";

export const AuthenticationContext = createContext({
  loading: false,
  error: null,
  data: null,
  setAuthState: () => {},
});

export function AuthContext({ children }) {
  const [authState, setAuthState] = useState({
    loading: false,
    // loading: true,
    data: null,
    error: null,
  });

  return (
    <AuthenticationContext.Provider
      value={{
        ...authState,
        setAuthState,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
