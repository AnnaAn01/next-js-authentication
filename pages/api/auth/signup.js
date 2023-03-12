import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // extracting the body from the request itself
    // const body = req.body;
    const { firstName, lastName, email, phone, city, password } = req.body;
    const errors = [];
    // validating the body
    const validationSchema = [
      {
        valid: validator.isLength(firstName, {
          min: 1,
          max: 20,
        }),
        // if the above validation is false, then
        errorMessage: "First name is invalid",
      },
      {
        valid: validator.isLength(lastName, {
          min: 1,
          max: 20,
        }),
        // if the above validation is false, then
        errorMessage: "Last name is invalid",
      },
      {
        valid: validator.isEmail(email),
        // if the above validation is false, then
        errorMessage: "Email is invalid",
      },
      {
        valid: validator.isMobilePhone(phone),
        // if the above validation is false, then
        errorMessage: "Phone number is invalid",
      },
      {
        valid: validator.isLength(city, { min: 1 }),
        // if the above validation is false, then
        errorMessage: "City is invalid",
      },
      {
        valid: validator.isStrongPassword(password),
        // if the above validation is false, then
        errorMessage: "Password is not string enough",
      },
    ];

    validationSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMessage);
      }
    });

    if (errors.length) {
      return res.status(400).json({ errorMessage: errors[0] });
    }

    // validating that the user doesn't already have an account by checking the email in the db, in this case in the arrawy belows

    const user = [
      {
        firstName: "Anna",
        lastName: "An",
        email: "anna@email.com",
        phone: "111222333333",
        city: "Seoul",
        password: "somepasswodHere/",
      },
      {
        firstName: "Ben",
        lastName: "B",
        email: "anna1@email.com",
        phone: "111222333333",
        city: "Seoul",
        password: "somepasswodHere/",
      },
    ];

    const userWithEmail = user.find((el) => el.email === email);
    if (userWithEmail) {
      return res
        .status(400)
        .json({ errorMessage: "Email is already registered" });
    }

    // hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create a jwt
    const alg = "HS256";
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new jose.SignJWT({
      email: email,
    })
      .setProtectedHeader({ alg })
      .setExpirationTime("24H")
      .sign(secret);

    return res.status(200).json({
      token: token,
    });
  }
  // if the if statement is not satisfied
  return res.status(404).json("Unknown endpoint");
}
