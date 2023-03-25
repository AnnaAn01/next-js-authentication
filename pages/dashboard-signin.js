import React from "react";
import { useState, useEffect, useContext } from "react";
import useAuth from "@/hooks/useAuth";
import { Alert, CircularProgress } from "@mui/material";
import AuthModalInputs from "./components/AuthModalInputs";
import { AuthenticationContext } from "@/context/AuthContext2";
import AuthModal from "./components/AuthModal";

const DashboardSignIn = () => {
  const { data, loading } = useContext(AuthenticationContext);
  const { signout } = useAuth();

  return (
    <>
      <h1 className="dashboard">dashboard</h1>
      <div className="dashboard-signin-wrapper">
        {loading ? null : (
          <div className="sign-up-in-wrapper">
            {data ? (
              <button className="signup-modal-button" onClick={signout}>
                Sign out
              </button>
            ) : (
              <div className="dashboard-button">
                <AuthModal isSignin={true} />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardSignIn;

// // CHATGPT code below

// import React, { useContext } from "react";
// import useAuth from "@/hooks/useAuth";
// import { CircularProgress } from "@mui/material";
// import AuthModalInputs from "./components/AuthModalInputs";
// import { AuthenticationContext } from "@/context/AuthContext2";
// import AuthModal from "./components/AuthModal";
// import { useRouter } from "next/router";

// const DashboardSignIn = () => {
//   const { data, loading } = useContext(AuthenticationContext);
//   const { signin, signout } = useAuth();
//   const router = useRouter();

//   const handleSignIn = async (values) => {
//     const { email, password } = values;

//     const res = await signin({ email, password });
//     if (res.success) {
//       router.push("/dashboard");
//     }
//   };

//   return (
//     <>
//       <h1 className="dashboard">dashboard</h1>
//       <div className="dashboard-signin-wrapper">
//         {loading ? (
//           <CircularProgress />
//         ) : (
//           <div className="sign-up-in-wrapper">
//             {data ? (
//               <button className="signup-modal-button" onClick={signout}>
//                 Sign out
//               </button>
//             ) : (
//               <div className="dashboard-button">
//                 <AuthModal
//                   isSignin={true}
//                   handleSubmit={handleSignIn}
//                   inputsComponent={AuthModalInputs}
//                   submitText="Sign In"
//                 />
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default DashboardSignIn;
