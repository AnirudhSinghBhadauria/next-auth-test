import GoogleProvider from "next-auth/providers/google";
import { Provider } from "next-auth/providers/index";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ] as Provider[],
  secret: process.env.NEXTAUTH_SECRET,
};
