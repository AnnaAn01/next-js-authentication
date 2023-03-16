import axios from "axios";

const useAuth = () => {
  const signin = async ({ email, password }) => {
    try {
      // also supply a request body
      const response = await axios.post(
        "http://localhost:3000/api/auth/signin",
        {
          email,
          password,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const signup = async () => {};

  return {
    signin,
    signup,
  };
};

export default useAuth;
