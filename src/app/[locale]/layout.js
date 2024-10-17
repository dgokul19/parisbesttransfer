import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import {routing} from '@/i18n/routing';

import "./globals.css";

export const metadata = {
  title: "Paris Best Transfer | Travel Booking",
  description: "Best Travel Service in Parise",
};

 
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params: { locale }
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
