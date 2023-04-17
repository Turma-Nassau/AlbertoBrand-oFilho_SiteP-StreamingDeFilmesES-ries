import "../styles/css/globals.css";

import { Roboto, Poppins } from "@next/font/google";

// const roboto = Roboto({ subsets: ["latin"], weight: "300" });
const popins = Poppins({ subsets: ["latin"], weight: "200" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={popins.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
