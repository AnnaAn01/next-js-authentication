import * as jose from "jose";

export default async function handler(req, res) {
  // extracting jwt from the header
  const bearerToken = req.headers["authorization"];
  //   check if the header exists
  if (!bearerToken) {
    res.status(401).json({
      errorMessage: "Unauthorized request (no bearer token)",
    });
  }
  // split the token from the Bearer token, right now it looke like this: Bearer slkdggjsldg/somerandomtoken/sdfsdfsdfsf
  // we split on the space, and get the second element which is the 1st index
  const token = bearerToken.split(" ")[1];
  // we do the same check for the token too
  if (!token) {
    res.status(401).json({
      errorMessage: "Unauthorized request(no token)",
    });
  }
  //   if we do have the above, then we get the secret we have in our env file
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  try {
    await jose.jwtVerify(token, secret);
  } catch (error) {
    res.status(401).json({
      errorMessage: "Unauthorized request (token invalid)",
    });
  }

  return res.json({ me: "Anna A" });
}
