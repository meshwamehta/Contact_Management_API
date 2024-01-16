const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (request, response, next) => {
  let token;
  let authHeader =
    request.headers.Authorization || request.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    //to verify the token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
      if (error) {
        response.status(401);
        throw new Error("user is not authorized");
      }
      console.log(decoded);
    });
  }
});
module.exports = validateToken;
