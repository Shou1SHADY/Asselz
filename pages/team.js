import { Team } from "@/sections"
import Head from "next/head"
import React from "react"

const team = () => {
  return (
    <>
      <Head>
        <title>Our Team — The People Behind Asellz</title>
        <meta
          name="description"
          content="Meet the Asellz team — creative professionals delivering corporate giveaways, event production, branding, and digital marketing solutions."
        />
        <meta
          name="keywords"
          content="asellz team, creative team Egypt, event production team, branding team"
        />

        <meta property="og:title" content="Our Team — The People Behind Asellz" />
        <meta
          property="og:description"
          content="Meet the Asellz team — creative professionals delivering corporate giveaways, event production, branding, and digital marketing solutions."
        />
        <meta property="og:image" content="https://asellz.com/images/Asellz.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://asellz.com/team" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Our Team — The People Behind Asellz" />
        <meta name="twitter:description" content="Meet the Asellz team — creative professionals delivering corporate giveaways, event production, and branding solutions." />

        <link rel="canonical" href="https://asellz.com/team" />
      </Head>
      <Team />
    </>
  )
}

export default team
