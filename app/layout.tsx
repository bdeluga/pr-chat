import "./globals.css";
import { Roboto } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

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
        className={`min-h-screen bg-gradient-to-b from-[#0B132B] to-[#1C2541] ${roboto.className}`}
      >
        {children}
      </body>
    </html>
  );
}
