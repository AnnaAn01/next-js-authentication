import * as jose from "jose";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  // // extracting jwt from the header
  // const bearerToken = req.headers["authorization"];
  // //   check if the header exists
  // if (!bearerToken) {
  //   return res.status(401).json({
  //     errorMessage: "Unauthorized request (no bearer token)",
  //   });
  // }
  // // split the token from the Bearer token, right now it looke like this: Bearer slkdggjsldg/somerandomtoken/sdfsdfsdfsf
  // // we split on the space, and get the second element which is the 1st index
  // const token = bearerToken.split(" ")[1];
  // // we do the same check for the token too
  // if (!token) {
  //   return res.status(401).json({
  //     errorMessage: "Unauthorized request(no token)",
  //   });
  // }
  // //   if we do have the above, then we get the secret we have in our env file
  // const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  // try {
  //   await jose.jwtVerify(token, secret);
  // } catch (error) {
  //   return res.status(401).json({
  //     errorMessage: "Unauthorized request (token invalid)",
  //   });
  // }

  //   now that we've verified the token we use jwt to decode the token
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({
      errorMessage: "Unauthorized request (no token)",
    });
  }

  const payload = jwt.decode(token);
  if (!payload.email) {
    return res.status(401).json({
      errorMessage: "Unauthorized request (token invalid)",
    });
  }

  const user = [
    {
      firstName: "Anna",
      lastName: "An",
      email: "anna@email.com",
      phone: "111222333333",
      city: "Seoul",
      password: "password",
    },
    {
      firstName: "Ben",
      lastName: "B",
      email: "anna1@email.com",
      phone: "111222333333",
      city: "Seoul",
      password: "password",
    },
  ];

  //   find the data from the db, we're do this locally for now
  //   maybe reutn selectively, don't return the password for the real app
  const userWithEmail = user.find((el) => el.email === payload.email);
  // return res.json({ userWithEmail });
  //   this is what we get after this
  // {
  //     "userWithEmail": {
  //         "firstName": "Anna",
  //         "lastName": "An",
  //         "email": "anna@email.com",
  //         "phone": "111222333333",
  //         "city": "Seoul",
  //         "password": "password"
  //     }
  // }

  if (!userWithEmail) {
    return res.status(401).json({
      errorMessage: "User not found",
    });
  }

  // return <div>something here</div>;

  return res.json({
    firstName: userWithEmail.firstName,
    lastName: userWithEmail.lastName,
  });
}
