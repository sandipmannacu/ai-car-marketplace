import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ImageKitProvider } from "@imagekit/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Lens | Find Your Dream Car",
  description: "Find your Dream Car",
};

export default async function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo.svg" sizes="any" />
          <link
            rel="preload"
            href="/fonts/my-font.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </head>
        <body className={`${inter.className}`}>
          <ImageKitProvider
            urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPIONT}
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="bg-blue-50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-600">
                <p>Made with 💗 by Car Lens</p>
              </div>
            </footer>
          </ImageKitProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
