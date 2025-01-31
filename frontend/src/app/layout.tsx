import type { Metadata } from "next";

import { appConfig } from "~/config";
import { geistMono, geistSans } from "~/font";
import { cn } from "~/lib/utils";
import { ThemeProvider } from "~/providers/theme-provider";
import { ToasterProvider } from "~/providers/toast-provider";

import "./globals.css";

export const metadata: Metadata = {
  title: appConfig.title,
  description: appConfig.description,
  robots: appConfig.robots,
  openGraph: {
    title: appConfig.title,
    description: appConfig.description,
    url: appConfig.appUrl,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToasterProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
