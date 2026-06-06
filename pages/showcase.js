import { ShowCase } from "@/sections"
import Head from "next/head"
import React from "react"

const showcase = () => {
  return (
    <>
      <Head>
        <title>Showcase — Our Work for Visa, Al-Futtaim & More | Asellz</title>
        <meta
          name="description"
          content="Browse Asellz's portfolio of corporate giveaways, event production, and branding work for clients including Visa, Al-Futtaim, LafargeHolcim, Eni, and more."
        />
        <meta
          name="keywords"
          content="corporate giveaways portfolio, event production showcase, branding work, asellz clients"
        />

        <meta property="og:title" content="Showcase — Our Work for Visa, Al-Futtaim & More | Asellz" />
        <meta
          property="og:description"
          content="Browse Asellz's portfolio of work for clients including Visa, Al-Futtaim, LafargeHolcim, Eni, and more."
        />
        <meta property="og:image" content="https://asellz.com/images/Asellz.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://asellz.com/showcase" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Showcase — Our Work for Visa, Al-Futtaim & More | Asellz" />
        <meta name="twitter:description" content="Browse Asellz's portfolio of work for clients including Visa, Al-Futtaim, LafargeHolcim, Eni, and more." />

        <link rel="canonical" href="https://asellz.com/showcase" />
      </Head>
      <ShowCase />
    </>
  )
}

export default showcase
