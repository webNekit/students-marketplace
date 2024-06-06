import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StudentSave",
  description: "StudentSave - маркетплейс с бесплатными архивами проектов, дизайнов и т.д.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ru">
      <body className={inter.className + " text-gray-300 font-medium w-full overflow-x-hidden"}>
        <ThemeProvider attribute="class" defaultTheme={'dark'} enableSystem disableTransitionOnChange>
          <Header />
          <main className="w-full" id="main">
            <div className="w-full" id="main-content">
              {children}
            </div>
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
