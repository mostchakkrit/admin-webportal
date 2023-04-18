import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Admin",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as any;
        const res = await fetch(
          "https://thaihealthcare_gw.anamai.moph.go.th/hbapi/admin/login",
          {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        if (data.status == "success") {
          return data;
        } else {
          return null;
        }
      },
    }),
  ],
  /*   session: {
    strategy: "jwt",
  }, */
  secret: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
  callbacks: {
    async jwt({ token, user, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.user = user;
      } else {
      }
      return token;
    },
    async session({ session, token, user }: any) {
      session.user = token.user;
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
