const SITE_URL = "https://asellz.com"

const pages = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/services", priority: "0.9", changefreq: "weekly" },
  { url: "/agency", priority: "0.8", changefreq: "monthly" },
  { url: "/showcase", priority: "0.8", changefreq: "monthly" },
  { url: "/team", priority: "0.7", changefreq: "monthly" },
  { url: "/contact", priority: "0.8", changefreq: "monthly" },
  { url: "/expertise/1", priority: "0.7", changefreq: "monthly" },
  { url: "/expertise/2", priority: "0.7", changefreq: "monthly" },
  { url: "/expertise/3", priority: "0.7", changefreq: "monthly" },
  { url: "/expertise/4", priority: "0.7", changefreq: "monthly" },
  { url: "/expertise/5", priority: "0.7", changefreq: "monthly" },
]

function generateSitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`
}

export default function Sitemap() {}

export async function getServerSideProps({ res }) {
  res.setHeader("Content-Type", "text/xml")
  res.write(generateSitemap())
  res.end()
  return { props: {} }
}
