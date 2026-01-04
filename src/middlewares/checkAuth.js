import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const checkAuth = (req, res, next) => {
  const headerToken = req.headers.authorization;
  const token = headerToken?.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY_JWT, (error, data) => {
    if (error) {
      res.status(401);
      res.json({
        success: false,
        message: "Invalid Token",
      });
    } else {
      next();
    }
  });
  console.log(token);
};
export default checkAuth;
