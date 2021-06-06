import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    // Providers.Credentials({
    //   // The name to display on the sign in form (e.g. 'Sign in with...')
    //   name: "Credentials",
    //   authorize: async (credentials) => {
    //     //console.log("credentials_:", credentials);

    //     try {
    //       const data = {
    //         username: credentials.username,
    //         password: credentials.password,
    //       };
    //       // API call associated with authentification
    //       // look up the user from the credentials supplied
    //       const user = await login(data);
    //       if (user) {
    //         // Any object returned will be saved in `user` property of the JWT
    //         return Promise.resolve(user);
    //       }
    //     } catch (error) {
    //       if (error) {
    //         //console.log(error.response);
    //         return Promise.reject(
    //           "/authorize/signin?error=Invalid username or password"
    //         );
    //       }
    //     }
    //   },
    // }),
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
});
