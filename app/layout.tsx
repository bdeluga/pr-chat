import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "PRConnect",
  description: "Chat about your pull request in real time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-gradient-to-b from-primary text-white to-secondary ${roboto.className}`}
      >
        {children}
      </body>
    </html>
  );
}
