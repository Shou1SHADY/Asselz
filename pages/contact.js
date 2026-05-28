import { Contact } from "@/sections"
import Head from "next/head"
import React from "react"

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact - Asellz</title>
        <meta
          name="description"
          content="Get in touch with Asellz. We're based in Egypt and serve clients globally. Reach us for giveaways, events, branding, and web development projects."
        />
        <meta property="og:title" content="Contact - Asellz" />
        <meta
          property="og:description"
          content="Get in touch with Asellz. We're based in Egypt and serve clients globally. Reach us for giveaways, events, branding, and web development projects."
        />
        <meta property="og:url" content="https://asellz.com/contact" />
        <link rel="canonical" href="https://asellz.com/contact" />
      </Head>
      <Contact />
    </>
  )
}

export default contact
