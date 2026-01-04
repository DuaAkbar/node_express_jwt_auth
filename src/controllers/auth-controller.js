import user from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const createUser = async (req, res) => {
  try {
    const { UserName, UserEmail, UserPassword } = req.body;

    if (UserName && UserEmail && UserPassword) {
      const checkUser = await user.findOne({ UserEmail: UserEmail });

      if (!checkUser) {
        const hashPassword = await bcrypt.hash(UserPassword, 6);

        const userCreated = await user.create({
          UserName,
          UserEmail,
          UserPassword: hashPassword,
        });
        res.status(201);
        res.json({
          success: true,
          message: "User Created Successfully",
          userId: userCreated._id,
        });
      } else {
        res.status(404);
        res.json({
          success: false,
          message: `User with email ${UserEmail} already exists`,
        });
      }
    } else {
      res.status(404);
      res.json({
        success: false,
        message: "All fields are required",
      });
    }
  } catch (error) {
    res.status(404);
    res.json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { UserEmail, UserPassword } = req.body;
    if (UserEmail && UserPassword) {
      const checkUser = await user.findOne({ UserEmail });
      if (checkUser) {
        const checkPassword = await bcrypt.compare(
          UserPassword,
          checkUser.UserPassword
        );

        if (checkPassword) {
          const token = jwt.sign(
            {
              userId: checkUser._id,
              UserName: checkUser.UserName,
              UserEmail: checkUser.UserEmail,
            },
            process.env.SECRET_KEY_JWT,
            { expiresIn: "120m" }
          );

          res.status(200);
          res.json({
            success: true,
            message: "User logged in Successfully",
            token : token
          });
        } else {
          res.status(404);
          res.json({
            success: false,
            message: `Incorrect Password For email ${UserEmail}`,
          });
        }
      } else {
        res.status(404);
        res.json({
          success: false,
          message: `User does not exists For email ${UserEmail}`,
        });
      }
    } else {
      res.status(404);
      res.json({
        success: false,
        message: "All Fields Are Required",
      });
    }
  } catch (error) {
    console.log(error);
    responce.status(500);
    responce.json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export { createUser, loginUser };
