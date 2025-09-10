import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import { ThemeProvider } from "@/providers/ThemeProvider";
import MainLayout from "@/components/layout/main-layout";

const inter = Inter({
  variable: "--font-1",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextJs + Ts + Scss Starter Template",
  description:
    "NextJs + TypeScript + Scss Starter Template created by Aplance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`${inter.variable}`}>
          <MainLayout>{children}</MainLayout>
        </body>
      </ThemeProvider>
    </html>
  );
}
