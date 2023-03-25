import React from "react";

const dashboard = () => {
  return <div>This is the dashboard for Signed in only</div>;
};

export default dashboard;

// // CHATGPT code below

// import React, { useContext } from "react";
// import { AuthenticationContext } from "@/context/AuthContext2";

// const dashboard = () => {
//   const { data } = useContext(AuthenticationContext);

//   if (!data) {
//     return <div>You must be signed in to access this page</div>;
//   }

//   return <div>This is the dashboard for Signed in only</div>;
// };

// export default dashboard;
