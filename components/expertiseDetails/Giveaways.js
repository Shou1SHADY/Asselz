
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Giveaways.module.scss';
import { Title } from '@/components/common/Title';

const categories = [
  { key: 'Premium', title: 'Premium Giveaways', desc: 'Luxury corporate gifts with high-end branding.' },
  { key: 'Economy', title: 'Economy Giveaways', desc: 'Budget-friendly giveaways with maximum branding impact.' },
  { key: 'CustomizedAndSummer', title: 'Customized & Summer Giveaways', desc: 'Tailor-made promotional items to fit your brand.' },
  { key: 'Tech', title: 'Tech Giveaways', desc: 'High-tech promotional items for modern businesses.' },
];

const LIMIT = 6;

const Giveaways = () => {
  const [data, setData] = useState({});
  const [page, setPage] = useState({});
  const [loading, setLoading] = useState({});

  const fetchImages = async (categoryKey) => {
    setLoading((prev) => ({ ...prev, [categoryKey]: true }));
    const currentPage = page[categoryKey] || 0;

    try {
      const res = await fetch(
        `/api/giveaways?category=${categoryKey}&limit=${LIMIT}&offset=${currentPage * LIMIT}`
      );
      const json = await res.json();

      setData((prev) => ({
        ...prev,
        [categoryKey]: [...(prev[categoryKey] || []), ...json.images],
      }));
      setPage((prev) => ({ ...prev, [categoryKey]: currentPage + 1 }));
    } catch (err) {
      console.error(`Error loading images for ${categoryKey}:`, err);
    } finally {
      setLoading((prev) => ({ ...prev, [categoryKey]: false }));
    }
  };

  useEffect(() => {
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

        {categories.map((cat) => (
          <div key={cat.key} className={styles.categorySection}>
            <div className={styles.textContent}>
              <h2>{cat.title}</h2>
              <p>{cat.desc}</p>
            </div>

            <div className={styles.imageGrid}>
              {(data[cat.key] || []).map((img, i) => (
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
              <button
                onClick={() => fetchImages(cat.key)}
                disabled={loading[cat.key]}
              >
                {loading[cat.key] ? 'Loading...' : 'Load More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Giveaways;
