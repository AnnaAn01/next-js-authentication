import { AuthenticationContext } from "../context/AuthContext2";
import axios from "axios";
import { useContext } from "react";
import { getCookie } from "cookies-next";

const useAuth = () => {
  const { data, error, loading, setAuthState } = useContext(
    AuthenticationContext
  );
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

  const fetchUser = async () => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });
    try {
      const jwt = getCookie("jwt");
      if (!jwt) {
        return setAuthState({
          data: null,
          error: null,
          loading: false,
        });
      }

      const response = await axios.get("http://localhost:3000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      // console.log(response);
      // this will ensure that after the above request we want the bearer token to always be here
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      });
    } catch (error) {
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      });
    }
  };

  return {
    signin,
    signup,
    fetchUser,
  };
};

export default useAuth;
