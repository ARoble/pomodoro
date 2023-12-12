import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "../../../lib/prisma";
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/auth/error", // Error code passed in query string as ?error=
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        try {
          const { email, name, picture } = profile;
          const existingUser = await prisma.user.findFirst({
            where: { email },
          });
          if (existingUser) {
            return true;
          }
          const newUser = await prisma.user.create({
            data: { name, email, image: picture },
          });
          return true;
        } catch (e) {
          console.log(e);
        }
      }
    },
    async session({ session, user, token }) {
      const sessionUser = await prisma.user.findFirst({
        where: { email: session?.user?.email! },
      });
      session.user.id = sessionUser?.id;

      return session;
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
