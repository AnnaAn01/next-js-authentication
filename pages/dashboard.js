import React from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthenticationContext } from "@/context/AuthContext2";

const dashboard = () => {
  const { data, loading } = useContext(AuthenticationContext);

  return (
    <div className="dashboard-signin-wrapper">
      This is the dashboard for Signed in only Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Aliquam nulla odit rerum nostrum cum a
      incidunt, ducimus labore suscipit beatae alias nisi fugit itaque ratione
      maxime dolore maiores laudantium recusandae vitae aliquid enim nesciunt
      iste eos at? Eaque sint, optio ullam id corporis perferendis voluptatum
      molestiae eius, laborum facere rem nam. Quod, eligendi sapiente. Doloribus
      veritatis aliquam autem atque dolores molestiae deserunt id illo,
      consectetur, qui suscipit architecto voluptatum soluta tempora temporibus
      ad vel quam natus ipsam, ducimus quas facere. Accusantium, nisi amet alias
      nostrum mollitia perferendis fuga quam odit, eius, veritatis ipsa
      assumenda sint explicabo accusamus? Sed, iusto inventore!
    </div>
  );
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
