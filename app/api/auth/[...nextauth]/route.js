import NextAuth from "next-auth";


export const authOptions = {
    providers: [],
    page: {
        signIN: '/signIn'
    }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST}