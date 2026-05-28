import { ShowCase } from "@/sections"
import Head from "next/head"
import React from "react"

const showcase = () => {
  return (
    <>
      <Head>
        <title>Showcase - Asellz</title>
        <meta
          name="description"
          content="Browse Asellz's portfolio of work for clients including Visa, Al-Futtaim, LafargeHolcim, Eni, and more."
        />
        <meta property="og:title" content="Showcase - Asellz" />
        <meta
          property="og:description"
          content="Browse Asellz's portfolio of work for clients including Visa, Al-Futtaim, LafargeHolcim, Eni, and more."
        />
        <meta property="og:url" content="https://asellz.com/showcase" />
        <link rel="canonical" href="https://asellz.com/showcase" />
      </Head>
      <ShowCase />
    </>
  )
}

export default showcase
