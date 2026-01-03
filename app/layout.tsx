import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instant Resume - AI-Powered Career Management Platform",
  description: "Create ATS-optimized resumes, automate job applications, and land your dream role faster. Comprehensive career management platform with AI-powered tools.",
  keywords: "resume builder, ATS optimization, job search, career management, cover letter generator, portfolio templates, auto apply jobs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
