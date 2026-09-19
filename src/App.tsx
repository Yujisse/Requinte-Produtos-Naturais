import { useEffect } from "react";
import { store } from "./data/store";
import { useReveal } from "./hooks/useReveal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import About from "./components/About";
import ProductCategories from "./components/ProductCategories";
import FeaturedProducts from "./components/FeaturedProducts";
import HowToBuy from "./components/HowToBuy";
import Advantages from "./components/Advantages";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import InstagramSection from "./components/InstagramSection";
import Location from "./components/Location";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import MobileBar from "./components/MobileBar";

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: store.name,
    description: store.seo.description,
    image: store.seo.ogImage,
    url: store.seo.canonical,
    telephone: store.phone.intl,
    address: {
      "@type": "PostalAddress",
      streetAddress: store.address.street,
      addressLocality: store.address.city,
      addressRegion: store.address.state,
      postalCode: store.address.cep,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: store.coordinates.lat,
      longitude: store.coordinates.lng,
    },
    sameAs: [store.instagram.url],
    areaServed: store.areaServed,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: store.reviews.rating.replace(",", "."),
      reviewCount: store.reviews.count,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function App() {
  useReveal();

  useEffect(() => {
    document.title = store.seo.title;
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <LocalBusinessSchema />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <ProductCategories />
        <FeaturedProducts />
        <HowToBuy />
        <Advantages />
        <Gallery />
        <Reviews />
        <InstagramSection />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBar />
    </div>
  );
}
