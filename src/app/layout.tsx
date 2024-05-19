import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import StyledComponentsRegistry from "./registery";

import NavBar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js course ",
  description: "a presentation to next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <NavBar />
          <AntdRegistry>
            <main>{children}</main>
          </AntdRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
