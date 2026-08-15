import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "New Grace Electrical | Industrial Panel Manufacturer in Hosur",
  description: "New Grace Electrical (NGE) is a leading industrial electrical panel manufacturer, A-Grade electrical contractor (TANGEDCO CEIG'S), and consultant in Hosur, India. Over 23 years of experience. Siemens switchgear channel partner.",
  metadataBase: new URL("https://newgraceeletrical.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "New Grace Electrical | Industrial Panel Manufacturer in Hosur",
    description: "New Grace Electrical (NGE) is a leading industrial electrical panel manufacturer, A-Grade electrical contractor, and consultant in Hosur, India. Over 23 years of experience.",
    url: "https://newgraceeletrical.in",
    siteName: "New Grace Electrical",
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "New Grace Electrical",
  "image": "https://www.newgraceeletrical.in/images/slide1_0.jpg",
  "@id": "https://www.newgraceeletrical.in/#organization",
  "url": "https://www.newgraceeletrical.in",
  "telephone": "+919786983972",
  "email": "newgraceeletrical@gmail.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot No.46 New SIDCO Industrial Estate, SREE NAGAR, Behind Telephone Exchange",
    "addressLocality": "Hosur",
    "addressRegion": "Tamil Nadu",
    "postalCode": "635109",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.7409,
    "longitude": 77.8253
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background">
        {children}
      </body>
    </html>
  );
}
