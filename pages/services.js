import Services from "@/sections/Services"
import Head from "next/head"
import React from "react"

const services = () => {
  return (
    <>
      <Head>
        <title>Services — Corporate Giveaways, Events & Digital Marketing | Asellz</title>
        <meta
          name="description"
          content="Explore Asellz's services including corporate giveaways, event production, photography, website development, and social media marketing for leading brands in Egypt and beyond."
        />
        <meta
          name="keywords"
          content="corporate giveaways, event production, photography, web development, social media marketing, branding services"
        />

        <meta property="og:title" content="Services — Corporate Giveaways, Events & Digital Marketing | Asellz" />
        <meta
          property="og:description"
          content="Explore Asellz's services including corporate giveaways, event production, photography, website development, and social media marketing."
        />
        <meta property="og:image" content="https://asellz.com/images/Asellz.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://asellz.com/services" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Services — Corporate Giveaways, Events & Digital Marketing | Asellz" />
        <meta name="twitter:description" content="Explore Asellz's services including corporate giveaways, event production, photography, website development, and social media marketing." />

        <link rel="canonical" href="https://asellz.com/services" />
      </Head>
      <Services />
    </>
  )
}

export default services
