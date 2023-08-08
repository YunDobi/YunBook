const jwt = require("jsonwebtoken");

module.exports = async (request, response, next) => {
  try {
    //   get the token from the authorization header
    // console.log(request.headers.authorization)
    const token = await request.headers.authorization.split(" ")[1];
    //check if the token matches the supposed origin
    const decodedToken = await jwt.verify(token, "Random Key");
    
    // retrieve the user details of the logged in user
    const user = await decodedToken;
    console.log(user);

    // pass the user down to the endpoints here
    request.user = user;

    // pass down functionality to the endpoint
    next();
    
  } catch (error) {
    console.log(error)
    response.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};