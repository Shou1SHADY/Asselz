import { Agency } from "@/sections"
import Head from "next/head"

const AgencyPage = () => {
  return (
    <>
      <Head>
        <title>About Us - Asellz</title>
        <meta
          name="description"
          content="Learn about Asellz — 5+ years delivering premium corporate giveaways, event production, branding, and digital marketing solutions to leading corporations."
        />
        <meta property="og:title" content="About Us - Asellz" />
        <meta
          property="og:description"
          content="Learn about Asellz — 5+ years delivering premium corporate giveaways, event production, branding, and digital marketing solutions to leading corporations."
        />
        <meta property="og:url" content="https://asellz.com/agency" />
        <link rel="canonical" href="https://asellz.com/agency" />
      </Head>
      <Agency />
    </>
  )
}

export default AgencyPage
