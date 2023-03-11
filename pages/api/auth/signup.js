import validator from "validator";

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
    res.status(200).json({
      hello: "body",
    });
  }
}
