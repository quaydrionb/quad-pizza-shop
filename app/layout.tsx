import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

import Footer from "@/components/Footer";
import BootstrapClient from "@/bootstrap-client/BootstrapClient";
import Nav from "./navbar/page";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Quad Pizzeria",
  description: "A fictional pizza website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <main>
          <Nav />
          {children}
          <Footer />

          <BootstrapClient />
        </main>
      </body>
    </html>
  );
}
