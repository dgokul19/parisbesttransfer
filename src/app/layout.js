import { Suspense } from "react";

import Loading from "./components/Loader";
import "./globals.css";

export const metadata = {
  title: "Paris Best Transfer | Travel Booking",
  description: "Best Travel Service in Parise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>
      <body>
        <Suspense fallback={<Loading/>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
