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
    // console.log(user);

    // pass the user down to the endpoints here
    request.user = user;

    // pass down functionality to the endpoint
    next();
    
  } catch (error) {
    console.log(error);
    // response.status(401).send({message: "Auth system is worng!"});
    response.status(403).json({ message: "Token is not valid" });
  }
};

//if can possible, send the 401 error and when the front side received the 401 and let it logout automatically. The homepage does not require to check the auth because avaiable to use auth. Or conditional situation such as if user is exisiting, then check the auth.