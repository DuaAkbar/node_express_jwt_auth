import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const connectionString = process.env.CONNECTION_STRING;

const ConnectToDb = async() => {
  try {
    const myConnection = await mongoose.connect(connectionString);
    console.log("Database has been Connected");
    console.log(myConnection.connection.host);
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

export default ConnectToDb;
