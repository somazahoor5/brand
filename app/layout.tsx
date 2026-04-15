import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Components/Navbar";

export const metadata: Metadata = {
  title: "TokoFash",
  description: "Fashion Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}