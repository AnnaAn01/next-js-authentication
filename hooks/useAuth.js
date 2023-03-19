import { AuthenticationContext } from "@/context/AuthContext2";
import axios from "axios";
import { useContext } from "react";

const useAuth = () => {
  const { data, error, loading, setAuthState } = useContext(
    AuthenticationContext
  );
  const signin = async ({ email, password }) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });
    try {
      // also supply a request body
      const response = await axios.post(
        "http://localhost:3000/api/auth/signin",
        {
          email,
          password,
        }
      );
      // console.log(response);
      setAuthState({
        data: response.data, // the user that we get back
        error: null,
        loading: false,
      });
    } catch (error) {
      // console.log(error.response.data.errorMessage);
      setAuthState({
        data: null, // the user that we get back
        error: error.response.data.errorMessage,
        loading: false,
      });
    }
  };
  const signup = async () => {};

  return {
    signin,
    signup,
  };
};

export default useAuth;
