import { Contact } from "@/sections"
import Head from "next/head"
import React from "react"

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Asellz — Get in Touch for Corporate Giveaways & Events</title>
        <meta
          name="description"
          content="Get in touch with Asellz. Based in Egypt and serving clients globally. Reach us for corporate giveaways, event production, branding, and web development projects."
        />
        <meta
          name="keywords"
          content="contact asellz, corporate giveaways inquiry, event production contact, branding inquiry Egypt"
        />

        <meta property="og:title" content="Contact Asellz — Get in Touch for Corporate Giveaways & Events" />
        <meta
          property="og:description"
          content="Get in touch with Asellz. Based in Egypt and serving clients globally. Reach us for corporate giveaways, events, branding, and web development projects."
        />
        <meta property="og:image" content="https://asellz.com/images/Asellz.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://asellz.com/contact" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Contact Asellz — Get in Touch for Corporate Giveaways & Events" />
        <meta name="twitter:description" content="Get in touch with Asellz for corporate giveaways, event production, branding, and web development projects." />

        <link rel="canonical" href="https://asellz.com/contact" />
      </Head>
      <Contact />
    </>
  )
}

export default contact
