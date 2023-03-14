// this has to be called middleware
// this will run before each of our endpoints
// right now I only have api/auth/me, but I might create others
export async function middleware(req, res) {
  console.log("I am the middleware and I was called before the endpoint");
}
