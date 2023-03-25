import * as jose from "jose";
import { NextResponse } from "next/server";
// this has to be called middleware
// this will run before each of our endpoints
// right now I only have api/auth/me, but I might create others
export async function middleware(req, res) {
  console.log("I am the middleware and I was called before the endpoint");
  // extracting jwt from the header

  // const bearerToken = req.headers.get("authorization");
  // const bearerToken = req.cookies.jwt;

  {
    /*  TRYING PROTECTED ROUTES*/
  }
  console.log(bearerToken);
  //   check if the header exists
  if (!bearerToken) {
    // return res.status(401).json({
    //   errorMessage: "Unauthorized request (no bearer token)",
    // });
    return NextResponse.json({ message: "Auth required" }, { status: 401 });
  }
  // split the token from the Bearer token, right now it looke like this: Bearer slkdggjsldg/somerandomtoken/sdfsdfsdfsf
  // we split on the space, and get the second element which is the 1st index
  const token = bearerToken.split(" ")[1];
  // we do the same check for the token too
  if (!token) {
    // return res.status(401).json({
    //   errorMessage: "Unauthorized request(no token)",
    // });
    return NextResponse.json({ message: "Auth required" }, { status: 401 });
  }
  //   if we do have the above, then we get the secret we have in our env file
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  try {
    await jose.jwtVerify(token, secret);
  } catch (error) {
    // return res.status(401).json({
    //   errorMessage: "Unauthorized request (token invalid)",
    // });
    return NextResponse.json({ message: "Auth required" }, { status: 401 });
  }
}

// middleware will be called everywhere, even where it's not needed
// so, we'll prevent it from being called unnecessarily by exporting a config that has an object with a matcher.
// We'll specify here all of the different routes that we want this middleware to match with
export const config = {
  matcher: ["/api/auth/me"],
  // matcher: ["/dashboard"],
};

// too add another api request, another endpoint, we just add like below
// export const config = {
//   matcher: ["/api/auth/me", "/api/auth/other"],
// };

// CHATGPT code below

// import * as jose from "jose";
// import { NextResponse } from "next/server";

// export async function middleware(req, res) {
//   console.log("I am the middleware and I was called before the endpoint");

//   const bearerToken = req.headers.get("authorization");
//   console.log(bearerToken);

//   if (!bearerToken) {
//     return NextResponse.json({ message: "Auth required" }, { status: 401 });
//   }

//   const token = bearerToken.split(" ")[1];

//   if (!token) {
//     return NextResponse.json({ message: "Auth required" }, { status: 401 });
//   }

//   const secret = new TextEncoder().encode(process.env.JWT_SECRET);
//   try {
//     await jose.jwtVerify(token, secret);
//   } catch (error) {
//     return NextResponse.json({ message: "Auth required" }, { status: 401 });
//   }
// }

// export const config = {
//   matcher: ["/api/auth/me"],
//   matcher: ["/api/auth/dashboard"],
// };
