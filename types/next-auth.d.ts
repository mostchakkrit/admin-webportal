import { DefaultSession, Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      username: string;
      institution: string;
    } & DefaultSession["user"];
    /** This is an example. You can find me in types/next-auth.d.ts */
  }
}
