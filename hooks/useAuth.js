import { AuthenticationContext } from "../context/AuthContext2";
import axios from "axios";
import { useContext } from "react";
import { getCookie, deleteCookie } from "cookies-next";

const useAuth = () => {
  const { setAuthState } = useContext(AuthenticationContext);
  const signin = async ({ email, password }, handleClose) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signin",
        {
          email,
          password,
        }
      );

      setAuthState({
        data: response.data, // the user that we get back
        error: null,
        loading: false,
      });
      handleClose();
    } catch (error) {
      // console.log(error.response.data.errorMessage);
      setAuthState({
        data: null, // the user that we get back
        error: error.response.data.errorMessage,
        loading: false,
      });
    }
  };
  const signup = async (
    { email, password, firstName, lastName, city, phone },
    handleClose
  ) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          email,
          password,
          firstName,
          lastName,
          city,
          phone,
        }
      );

      setAuthState({
        data: response.data, // the user that we get back
        error: null,
        loading: false,
      });
      handleClose();
    } catch (error) {
      // console.log(error.response.data.errorMessage);
      setAuthState({
        data: null, // the user that we get back
        error: error.response.data.errorMessage,
        loading: false,
      });
    }
  };

  const signout = () => {
    deleteCookie("jwt");

    setAuthState({
      data: null, // the user that we get back
      error: null,
      loading: false,
    });
    window.location.reload();
  };

  return {
    signin,
    signup,
    signout,
  };
};

export default useAuth;
