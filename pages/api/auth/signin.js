import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { setCookie } from "cookies-next";

export default async function handler(req, res) {
  //  this is a POST request
  console.log("Sign in Request");
  if (req.method === "POST") {
    // extract email and password from the body
    const { email, password } = req.body;
    const errors = [];

    const validationSchema = [
      {
        valid: validator.isEmail(email),
        errorMessage: "Email is invalid",
      },
      {
        valid: validator.isLength(password, { min: 1 }),
        errorMessage: "Password is invalid",
      },
    ];

    validationSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMessage);
      }
    });

    if (errors.length) {
      res.status(400).json({ errorMessage: errors[0] });
    }

    // check if the user already has an account with us
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
    const userWithEmail = user.find((el) => el.email === email);
    // console.log(userWithEmail.password);
    // if (userWithEmail) {
    //   return res.status(400).json({ errorMessage: "User found" });
    // }

    if (!userWithEmail) {
      return res
        .status(401)
        .json({ errorMessage: "Email or password is invalid?" });
    }

    // check if the user that we have in our db matches with password that was supplied to us by the user trying to log in
    // password - what user gave us, userWithEmail.password - the hashed password

    // const isMatch = await bcrypt.compare(password, userWithEmail.password);

    let isMatch = "false";
    if (password === userWithEmail.password) {
      isMatch = true;
    }

    // console.log(isMatch);
    // temporarily doing thsi way because I am not bcrypting and not saving the pw to the db, it's saved in this file locally without encription
    if (!isMatch) {
      return res
        .status(401)
        .json({ errorMessage: "Email or password is invalid!!" });
    }
    // if reached to this point, then everything is fine
    // create a jwt
    const alg = "HS256";
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new jose.SignJWT({
      email: userWithEmail.email,
    })
      .setProtectedHeader({ alg })
      .setExpirationTime("24H")
      .sign(secret);

    setCookie("jwt", token, { req, res, maxAge: 60 * 6 * 24 });

    return res.status(200).json({
      // extract and pass back the user themselves
      firstName: userWithEmail.firstName,
      lastName: userWithEmail.lastName,
      email: userWithEmail.email,
      phone: userWithEmail.phone,
      city: userWithEmail.city,
    });
  }
  // if the if statement is not satisfied
  return res.status(404).json("Unknown endpoint");
}
