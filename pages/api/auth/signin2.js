// import validator from "validator";
// import bcrypt from "bcrypt";
// import * as jose from "jose";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const errors = [];
//     const { email, password } = req.body;

//     const validationSchema = [
//       {
//         valid: validator.isEmail(email),
//         errorMessage: "Email is invalid",
//       },
//       {
//         valid: validator.isLength(password, {
//           min: 1,
//         }),
//         errorMessage: "Password is invalid",
//       },
//     ];

//     validationSchema.forEach((check) => {
//       if (!check.valid) {
//         errors.push(check.errorMessage);
//       }
//     });

//     if (errors.length) {
//       return res.status(400).json({ errorMessage: errors[0] });
//     }

//     const user = [
//       {
//         firstName: "Anna",
//         lastName: "An",
//         email: "anna@email.com",
//         phone: "111222333333",
//         city: "Seoul",
//         password: "somepasswodHere/",
//       },
//       {
//         firstName: "Ben",
//         lastName: "B",
//         email: "anna1@email.com",
//         phone: "111222333333",
//         city: "Seoul",
//         password: "password",
//       },
//     ];

//     const userWithEmail = user.find((el) => el.email === email);

//     if (!userWithEmail) {
//       return res
//         .status(401)
//         .json({ errorMessage: "Email or password is invalid!" });
//     }

//     const isMatch = await bcrypt.compare(password, userWithEmail.password);

//     if (!isMatch) {
//       return res
//         .status(401)
//         .json({ errorMessage: "Email or password is invalid??" });
//     }

//     const alg = "HS256";

//     const secret = new TextEncoder().encode(process.env.JWT_SECRET);

//     const token = await new jose.SignJWT({ email: userWithEmail.email })
//       .setProtectedHeader({ alg })
//       .setExpirationTime("24h")
//       .sign(secret);

//     return res.status(200).json({
//       firstName: userWithEmail.first_name,
//       lastName: userWithEmail.last_name,
//       email: userWithEmail.email,
//       phone: userWithEmail.phone,
//       city: userWithEmail.city,
//     });
//   }

//   return res.status(404).json("Unknown endpoint");
// }
