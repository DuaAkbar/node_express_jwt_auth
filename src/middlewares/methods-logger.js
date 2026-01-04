import fs from "fs";

const logger = (req, res, next) => {
  fs.appendFileSync(
    "C:/Users/Admin/OneDrive/Desktop/node_express_jwt_auth/src/logs/methodslogs.txt", 
    `\n Request Time -> ${new Date()} , Request method -> ${
      req.method
    } , Request Url -> ${req.url}`
  );
  next();
};

export default logger;
