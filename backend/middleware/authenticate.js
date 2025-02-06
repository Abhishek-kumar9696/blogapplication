import JWT from "jsonwebtoken";



// redisClient.connect();
export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");
    //console.log("Authorization: ", token);
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decode = JWT.verify(token, process.env.SECRET_KEY);
    req.user = decode;
    next();
  } catch (error) {
    console.log("JWT Error:", error);
    res.status(401).json({ message: "Invalid token" });
  }
};

