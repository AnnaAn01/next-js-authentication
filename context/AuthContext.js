"use client";

import { useState, createContext } from "react";

const User = {
  id: "",
  firstName: "",
  lastName: "",
  emial: "",
  city: "",
  phone: "",
};
const AuthState = {
  loading: false,
  error: null,
  data: null,
};

const AuthenticationContext = createContext();

export default function AuthContext({ children }) {
  const [authState, setAuthState] = useState({
    loading: false,
    data: null,
    error: null,
  });
  return <div>{children}</div>;
}
