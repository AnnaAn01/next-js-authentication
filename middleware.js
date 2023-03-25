// import { parseJWS } from "jose";
// import { JWTVerify } from "jose";
// import { NextResponse } from "next/server";

// export default async function middleware(req) {
//   let jwtToken = null;
//   let url = req.url;

//   // Get the JWT token from the "Authorization" header
//   const authHeader = req.headers.get("jwt");
//   if (authHeader && authHeader.startsWith("Bearer ")) {
//     jwtToken = authHeader.slice("Bearer ".length);
//   }

//   // If no token or an invalid token is provided, redirect to the login page
//   if (!jwtToken && url.includes("/dashboard")) {
//     return NextResponse.redirect("http://localhost:3000/dshbrd-signin");
//   }
//   try {
//     // Verify the JWT token using the "jose" library
//     const { payload } = await JWTVerify(parseJWS(jwtToken), publicKey);

//     // If the token is valid and the user is not authenticated, redirect to the login page
//     if (!payload.authenticated && url.includes("/dashboard")) {
//       return NextResponse.redirect("http://localhost:3000/dshbrd-signin");
//     }

//     // If the token is valid and the user is authenticated, allow access to the requested page
//     return NextResponse.next();
//   } catch (error) {
//     // If there is an error verifying the token, redirect to the login page
//     return NextResponse.redirect("http://localhost:3000/dshbrd-signin");
//   }
// }

// import * as jose from "jose";
// import { NextResponse } from "next/server";

// export async function middleware(req, res) {
//   //   console.log("I am the middleware and I was called before the endpoint");

//   const bearerToken = req.headers.get("authorization");
//   // const bearerToken = req.cookies.jwt;

//   console.log(bearerToken, "THIS!!!");

//   //   check if the header exists
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
//   matcher: ["/dashboard"],
// };

import * as jose from "jose";
import { NextResponse } from "next/server";
import cookie from "cookie";

export async function middleware(req, res) {
  const cookies = cookie.parse(req.headers.get("cookie") || "");
  const token = cookies.jwt;

  if (!token) {
    return NextResponse.json({ message: "Auth required, !!" }, { status: 401 });
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  try {
    await jose.jwtVerify(token, secret);
  } catch (error) {
    return NextResponse.json(
      { message: "Auth required, this" },
      { status: 401 }
    );
  }
}

export const config = {
  matcher: ["/api/auth/me"],
  matcher: ["/dashboard"],
};
