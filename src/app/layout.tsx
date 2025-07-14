import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Topbar from "@/components/header/TopBar"; 
import DynamicHeader from "@/components/header/DynamicHeader";
import Footer from "@/components/footer/Footer";
import { ScrollToTop } from "@/components/common/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"], // Optional: 'latin' covers most cases
  weight: ["400", "500", "600", "700"], // Choose the weights you need
  variable: "--font-poppins", // Optional: CSS variable name
  display: "swap", // Optional: For better performance
});

export const metadata: Metadata = {
  title: "SkillGro - E-Learning Platform",
  description:
    "SkillGro is a modern e-learning platform that offers a wide range of courses to help you learn and grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Topbar />
        <DynamicHeader />
        {children}
        <ScrollToTop variant="purple" showAfter={300} />
        <Footer />
      </body>
    </html>
  );
}
