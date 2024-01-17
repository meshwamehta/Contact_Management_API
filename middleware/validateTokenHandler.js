const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
//server side validation the token
const validateToken = asyncHandler(async (request, response, next) => {
  let token;
  let authHeader =
    request.headers.Authorization || request.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    //in header jwt looks like this: Bearer eyJhbGciOiJ.... so to access only token without (Bearer and space) we use below process
    token = authHeader.split(" ")[1];
    //to verify the token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
      if (error) {
        response.status(401);
        throw new Error("user is not authorized");
      }
      //extracted the information which was embeded in token
      request.user = decoded.user;
      next();
    });
    if (!token) {
      response.status(401);
      throw new Error("User is not authorized or token is missing");
    }
  }
});
module.exports = validateToken;
