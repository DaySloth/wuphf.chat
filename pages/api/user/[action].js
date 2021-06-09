import { connectToDatabase } from "../../../util/mongodb";
import bcrypt from "bcrypt";
import { SendEmail, SendSMS } from "../../../util/sender";

export default async (req, res) => {
  // pulls out the action from the query
  const {
    query: { action },
  } = req;

  //deletes confirm password from the user object
  delete req.body.confirm_password;
  const user = req.body;

  //connects to the database so we can perform tasks on it
  const { db } = await connectToDatabase();
  const Users = await db.collection("users");

  switch (action) {
    case "signup":
      //encrypt password
      const encrypted_password = await bcrypt.hash(user.password, 10);
      user.password = encrypted_password;
      user.isVerified = false;

      try {
        //insert new user into the collection
        const new_user = await Users.insertOne(user);
        if (new_user.insertedCount === 1) {
          //success
          // SendEmail(
          //   "allisterrampenthal@gmail.com",
          //   "Testy Email",
          //   "Haha this worked"
          // );
          //SendSMS(`+1${user.phone_number}`);
          res.status(200);
          res.end();
        }
      } catch (error) {
        //error
        console.log(error);
        res.status(500);
        res.end();
      }

      break;

    default:
      break;
  }
};
