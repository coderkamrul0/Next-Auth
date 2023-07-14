import Provider from "@/context/provider";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Global/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Auth - Karmul",
  description: "Next-Auth v4 with Nextjs Server Actions, Mongo DB, Mongoose, Google Login",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-10 pt-5">
          <Provider>
            <Header />
            <main>{children}</main>
          </Provider>
        </div>
      </body>
    </html>
  );
}
