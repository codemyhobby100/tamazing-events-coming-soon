import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Tamazing Events",
  description: "Transforming your dream events into unforgettable experiences with elegance, creativity, and a touch of class",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Tamazing Events</title>
        <meta name="description" content="Transforming your dream events into unforgettable experiences with elegance, creativity, and a touch of class" />
        <meta name="keywords" content="Tamazing Events, Event Planning, Coming Soon" />
        <meta property="og:title" content="Tamazing Events" />
        <meta property="og:description" content="Stay tuned for the launch of our amazing event services!" />
        <meta property="og:image" content="/images/coming-soon-banner.jpg" />
        <meta property="og:url" content="https://tamazingevents.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
         rel="stylesheet"/>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
