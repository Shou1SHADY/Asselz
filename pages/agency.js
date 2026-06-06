import { Agency } from "@/sections"
import Head from "next/head"

const AgencyPage = () => {
  return (
    <>
      <Head>
        <title>About Us — Premium Corporate Giveaways & Events Agency | Asellz</title>
        <meta
          name="description"
          content="Learn about Asellz — 5+ years delivering premium corporate giveaways, event production, branding, and digital marketing solutions to leading corporations like Visa, Al-Futtaim, and LafargeHolcim."
        />
        <meta
          name="keywords"
          content="about asellz, corporate giveaway agency, event production company, branding agency Egypt, digital marketing agency"
        />

        <meta property="og:title" content="About Us — Premium Corporate Giveaways & Events Agency | Asellz" />
        <meta
          property="og:description"
          content="Learn about Asellz — 5+ years delivering premium corporate giveaways, event production, branding, and digital marketing solutions to leading corporations."
        />
        <meta property="og:image" content="https://asellz.com/images/Asellz.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://asellz.com/agency" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="About Us — Premium Corporate Giveaways & Events Agency | Asellz" />
        <meta name="twitter:description" content="5+ years delivering premium corporate giveaways, event production, branding, and digital marketing solutions." />

        <link rel="canonical" href="https://asellz.com/agency" />
      </Head>
      <Agency />
    </>
  )
}

export default AgencyPage
