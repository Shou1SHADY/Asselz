import { Hero } from "@/sections";
import Head from "next/head";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Asellz",
  url: "https://asellz.com",
  logo: "https://asellz.com/images/Asellz.png",
  description:
    "Asellz provides high-quality corporate giveaways, event production, branding, photography, web development, and digital marketing solutions.",
  sameAs: [
    "https://www.facebook.com/asellz",
    "https://www.instagram.com/asellz",
    "https://www.linkedin.com/company/asellz",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://asellz.com/contact",
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Asellz — Corporate Giveaways, Events & Digital Marketing</title>
        <meta
          name="description"
          content="Asellz provides high-quality corporate giveaways, event production, branding, photography, web development, and digital marketing solutions for leading businesses."
        />
        <meta
          name="keywords"
          content="corporate giveaways, event production, branding, photography, web development, digital marketing, social media marketing, Egypt"
        />

        <meta property="og:title" content="Asellz — Corporate Giveaways, Events & Digital Marketing" />
        <meta
          property="og:description"
          content="High-quality giveaways, event production, branding, and digital marketing solutions for leading corporations."
        />
        <meta property="og:image" content="https://asellz.com/images/Asellz.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://asellz.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Asellz" />

        <meta name="twitter:title" content="Asellz — Corporate Giveaways, Events & Digital Marketing" />
        <meta name="twitter:description" content="High-quality giveaways, event production, branding, and digital marketing solutions." />

        <link rel="canonical" href="https://asellz.com" />
      </Head>

      <Script
        id="json-ld-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />

      <main>
        <Hero />
      </main>
    </>
  );
}
