import "./globals.css";
import Link from "next/link";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head />
        <body className={inter.className}>
          <div>
            <ul className="nav-bar">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/heroes">All Heroes</Link>
              </li>
              <li>
                <Link href="/addhero">Add Hero</Link>
              </li>
            </ul>
          </div>
          <main>{children}</main>
        </body>
      </html>
    </>
  );
}
