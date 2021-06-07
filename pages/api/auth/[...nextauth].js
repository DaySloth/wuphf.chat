import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { connectToDatabase } from "../../../util/mongodb";
import bcrypt from "bcrypt";

async function login(user) {
  const { db } = await connectToDatabase();
  const Users = await db.collection("users");

  const found_user = await Users.find({ email: user.username }).toArray();

  if (found_user[0]) {
    let password_match = await bcrypt.compare(
      user.password,
      found_user[0].password
    );
    if (password_match) {
      return {
        first_name: found_user[0].first_name,
        last_name: found_user[0].last_name,
        username: found_user[0].username,
        id: found_user[0]._id,
      };
    } else {
      console.log("password mismatch");
    }
  } else {
    console.log("user not found");
  }
}

export default NextAuth({
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      authorize: async (credentials) => {
        //console.log("credentials_:", credentials);

        try {
          const data = {
            username: credentials.username,
            password: credentials.password,
          };
          // API call associated with authentification
          // look up the user from the credentials supplied
          const user = await login(data);
          if (user) {
            // Any object returned will be saved in `user` property of the JWT
            return Promise.resolve(user);
          }
        } catch (error) {
          if (error) {
            //console.log(error.response);
            return Promise.reject(
              "/authorize/login?error=Invalid username or password"
            );
          }
        }
      },
    }),
  ],
  pages: {
    signIn: "/authorize/login",
    signOut: "/auth/signout",
    error: "/authorize/login", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: null, // If set, new users will be directed here on first sign in
  },
  callbacks: {
    jwt: async (token, user, account, profile, isNewUser) => {
      //  "user" parameter is the object received from "authorize"
      //  "token" is being send below to "session" callback...
      //  ...so we set "user" param of "token" to object from "authorize"...
      //  ...and return it...
      user && (token.user = user);
      return Promise.resolve(token); // ...here
    },
    session: async (session, user, sessionToken) => {
      //  "session" is current session object
      //  below we set "user" param of "session" to value received from "jwt" callback
      session.user = user.user;
      return Promise.resolve(session);
    },
  },
});
