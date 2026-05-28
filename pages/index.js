import { Hero } from "@/sections";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        {/* ✅ Page Title 2 */}
        <title>Asellz Design - Your Partner in Growth</title>
        <meta
          name="description"
          content="Asellz provides high-quality giveaways, events, branding, and digital marketing solutions for businesses."
        />

        {/* ✅ Favicon */}
        <link rel="icon" href="/images/favicon.ico" />

        {/* ✅ Open Graph (For Social Media Sharing) */}
        <meta property="og:title" content="Asellz Design - Your Partner in Growth" />
        <meta
          property="og:description"
          content="High-quality giveaways, event planning, branding, and digital marketing solutions."
        />
        <meta property="og:image" content="/images/Asellz.png" />
        <meta property="og:url" content="https://asellz.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://asellz.com" />
      </Head>

      <main>
        <Hero />
      </main>
    </>
  );
}
