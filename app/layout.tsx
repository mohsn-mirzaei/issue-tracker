import "@radix-ui/themes/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import localfont from "next/font/local";
import { Theme } from "@radix-ui/themes";
import NavBar from "./NavBar";

const iranYekan = localfont({
  src: "../public/fonts/Qs_Iranyekan.woff2",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={iranYekan.className} dir="rtl">
        <Theme>
          <NavBar />
          <main className="p-5">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
