import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import styles from '@/styles/Giveaways.module.scss';
import { Title } from '@/components/common/Title';

const categories = [
  { 
    key: 'Bags', 
    title: 'Bags Giveaways', 
    desc: 'Stylish and functional bags that showcase your brand wherever they go — ideal for corporate events, travel, and everyday use.' 
  },
  { 
    key: 'Mugs', 
    title: 'Mugs Giveaways', 
    desc: 'Custom-branded mugs that make every coffee break a reminder of your business — perfect for offices, clients, and giveaways.' 
  },
  { 
    key: 'Sets', 
    title: 'Sets Giveaways', 
    desc: 'Elegant gift sets combining multiple branded items for a premium and memorable corporate gifting experience.' 
  },
  { 
    key: 'Tech', 
    title: 'Tech Giveaways', 
    desc: 'Modern tech gadgets and accessories that connect innovation with your brand — perfect for a forward-thinking impression.' 
  },
];

const LIMIT = 6;
const Xs = 6 ;
const Giveaways = () => {
  const [data, setData] = useState({});
  const [page, setPage] = useState({});
  const [loading, setLoading] = useState({});
  const [total, setTotal] = useState({});
  const isFetched = useRef(false); // prevents double fetch in React Strict Mode

  const fetchImages = async (categoryKey) => {
    if (loading[categoryKey]) return; // prevent parallel calls
    setLoading((prev) => ({ ...prev, [categoryKey]: true }));

    const currentPage = page[categoryKey] || 0;
    try {
      const res = await fetch(
        `/api/giveaways?category=${categoryKey}&limit=${LIMIT}&offset=${currentPage * LIMIT}`
      );
      const json = await res.json();


      if (!Array.isArray(json.images)) {
        console.error(`Unexpected API response for ${categoryKey}:`, json);
        return;
      }

      // Append new images to previous ones
      setData((prev) => ({
        ...prev,
        [categoryKey]: [...(prev[categoryKey] || []), ...json.images],
      }));

      // Increment page number
      setPage((prev) => ({ ...prev, [categoryKey]: currentPage + 1 }));

      // Save total if available
      if (json.total !== undefined) {
        setTotal((prev) => ({ ...prev, [categoryKey]: json.total }));
      }

      } catch (err) {
      console.error(`Error loading images for ${categoryKey}:`, err);
    } finally {
      setLoading((prev) => ({ ...prev, [categoryKey]: false }));
    }
  };

  // Fetch initial images only once (avoid React Strict Mode double run)
  useEffect(() => {
    if (isFetched.current) return;
    isFetched.current = true;

    categories.forEach((cat) => {
      fetchImages(cat.key);
    });
  }, []);

  return (
    <section className={styles.giveawaysPage}>
      <div className="container">
        <Title title="Giveaways" />
        <p className={styles.description}>
          Corporate & promotional gifts with custom branding options.
        </p>

        {categories.map((cat) => {
          const images = data[cat.key] || [];
          const isLoading = loading[cat.key];
          const totalImages = total[cat.key] || 0;
          const hasMore = images.length < totalImages;

          return (
            <div key={cat.key} className={styles.categorySection}>
              <div className={styles.textContent}>
                <h2>{cat.title}</h2>
                <p>{cat.desc}</p>
              </div>

              <div className={styles.imageGrid}>
                {images.map((img, i) => (
                  <div key={i} className={styles.imageWrapper}>
                    <Image
                      src={img.url}
                      alt={cat.title}
                      width={300}
                      height={200}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              <div className={styles.loadMore}>
                {hasMore ? (
                  <button onClick={() => fetchImages(cat.key)} disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Load More'}
                  </button>
                ) : (
                  <p className={styles.noMoreText}>No more images</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Giveaways;
