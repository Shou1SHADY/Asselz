import Services from "@/sections/Services"
import Head from "next/head"
import React from "react"

const services = () => {
  return (
    <>
      <Head>
        <title>Services - Asellz</title>
        <meta
          name="description"
          content="Explore Asellz's services including corporate giveaways, event production, photography, website development, and social media marketing."
        />
        <meta property="og:title" content="Services - Asellz" />
        <meta
          property="og:description"
          content="Explore Asellz's services including corporate giveaways, event production, photography, website development, and social media marketing."
        />
        <meta property="og:url" content="https://asellz.com/services" />
        <link rel="canonical" href="https://asellz.com/services" />
      </Head>
      <Services />
    </>
  )
}

export default services
