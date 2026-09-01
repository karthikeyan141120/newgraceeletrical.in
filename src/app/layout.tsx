import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
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
    "streetAddress": "Sy.No.44/2Q4, Plot No.30, East Plot, Govinda agraharam, Rajeshwari Layout",
    "addressLocality": "Hosur",
    "addressRegion": "Tamil Nadu",
    "postalCode": "635126",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.774218,
    "longitude": 77.798890
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
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
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
