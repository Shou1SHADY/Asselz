"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import styles from "@/styles/Giveaways.module.scss"
import { Title } from "@/components/common/Title"

const categories = [
  {
    key: "Bags",
    title: "Bags Giveaways",
    desc: "Stylish and functional bags that showcase your brand wherever they go — ideal for corporate events, travel, and everyday use.",
  },
  {
    key: "Mugs",
    title: "Mugs Giveaways",
    desc: "Custom-branded mugs that make every coffee break a reminder of your business — perfect for offices, clients, and giveaways.",
  },
  {
    key: "Sets",
    title: "Sets Giveaways",
    desc: "Elegant gift sets combining multiple branded items for a premium and memorable corporate gifting experience.",
  },
  {
    key: "Tech",
    title: "Tech Giveaways",
    desc: "Modern tech gadgets and accessories that connect innovation with your brand — perfect for a forward-thinking impression.",
  },
  {
    key: "Notebooks",
    title: "Notebooks Giveaways",
    desc: "Branded notebooks that inspire creativity and organization — perfect for meetings, events, and everyday use.",
  },
  {
    key: "Rubber",
    title: "Rubber Giveaways",
    desc: "Durable rubber items that combine practicality with brand visibility — ideal for outdoor events and active lifestyles.",
  },
  {
    key: "Pens",
    title: "Pens Giveaways",
    desc: "Classic branded pens that leave a lasting impression with every word written — perfect for conferences, offices, and promotional events.",
  }
]

const LIMIT = 6;
const Xs = 6 ;
const Giveaways = () => {
  const [data, setData] = useState({})
  const [page, setPage] = useState({})
  const [loading, setLoading] = useState({})
  const [total, setTotal] = useState({})
  const [activeTab, setActiveTab] = useState("Bags") // added active tab state
  const isFetched = useRef(false)

  const fetchImages = async (categoryKey) => {
    if (loading[categoryKey]) return
    setLoading((prev) => ({ ...prev, [categoryKey]: true }))

    const currentPage = page[categoryKey] || 0
    try {
      const res = await fetch(`/api/giveaways?category=${categoryKey}&limit=${LIMIT}&offset=${currentPage * LIMIT}`)
      const json = await res.json()

      if (!Array.isArray(json.images)) {
        console.error(`Unexpected API response for ${categoryKey}:`, json)
        return
      }

      setData((prev) => ({
        ...prev,
        [categoryKey]: [...(prev[categoryKey] || []), ...json.images],
      }))

      setPage((prev) => ({ ...prev, [categoryKey]: currentPage + 1 }))

      if (json.total !== undefined) {
        setTotal((prev) => ({ ...prev, [categoryKey]: json.total }))
      }
    } catch (err) {
      console.error(`Error loading images for ${categoryKey}:`, err)
    } finally {
      setLoading((prev) => ({ ...prev, [categoryKey]: false }))
    }
  }

  useEffect(() => {
    if (isFetched.current) return
    isFetched.current = true

    categories.forEach((cat) => {
      fetchImages(cat.key)
    })
  }, [])

  const activeCat = categories.find((cat) => cat.key === activeTab)
  const images = data[activeTab] || []
  const isLoading = loading[activeTab]
  const totalImages = total[activeTab] || 0
  const hasMore = images.length < totalImages

  return (
    <section className={styles.giveawaysPage}>
      <div className="container">
        <Title title="Giveaways" />
        <p className={styles.description}>Corporate & promotional gifts with custom branding options.</p>

        <div className={styles.tabNavigation}>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`${styles.tabButton} ${activeTab === cat.key ? styles.active : ""}`}
            >
              {cat.key}
            </button>
          ))}
        </div>

        {activeCat && (
          <div className={styles.categorySection}>
            <div className={styles.textContent}>
              <h2>{activeCat.title}</h2>
              <p>{activeCat.desc}</p>
            </div>

            <div className={styles.imageGrid}>
              {images.map((img, i) => (
                <div key={i} className={styles.imageWrapper}>
                  <Image
                    src={img.url || "/placeholder.svg"}
                    alt={activeCat.title}
                    width={300}
                    height={200}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className={styles.loadMore}>
              {hasMore ? (
                <button onClick={() => fetchImages(activeTab)} disabled={isLoading}>
                  {isLoading ? "Loading..." : "Load More"}
                </button>
              ) : (
                <p className={styles.noMoreText}>No more images</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Giveaways
