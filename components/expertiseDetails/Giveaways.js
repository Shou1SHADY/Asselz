// import React from "react";
// import { Title } from "@/components/common/Title";

// const Giveaways = () => {
//   return (
//     <section className="expertise-detail">
//       <div className="container">
//         <Title title="Giveaways" />
//         <p>Corporate & promotional gifts with custom branding options.</p>

//         {/* Premium Section */}
//         <div className="category-section">
//           <h2>Premium Giveaways</h2>
//           <p>Luxury corporate gifts with high-end branding.</p>
//           <img src="../images/premium-giveaway.jpg" alt="Premium Giveaways" />
//         </div>

//         {/* Economy Section */}
//         <div className="category-section">
//           <h2>Economy Giveaways</h2>
//           <p>Budget-friendly giveaways with maximum branding impact.</p>
//           <img src="../images/promo-bags.png" alt="Economy Giveaways" />
//         </div>

//         {/* Customized Section */}
//         <div className="category-section">
//           <h2>Customized Giveaways</h2>
//           <p>Tailor-made promotional items to fit your brand.</p>
//           <img src="../images/customized-giveaway.jpg" alt="Customized Giveaways" />
//         </div>

        
//         {/* Summer Section */}
//         <div className="category-section">
//           <h2>Summer Giveaways</h2>
//           <p>summer items to fit your brand.</p>
//           <img src="../images/customized-giveaway.jpg" alt="Summer Giveaways" />
//         </div>
//          {/* Customized Section */}
//          <div className="category-section">
//           <h2>Tech Giveaways</h2>
//           <p>summer items to fit your brand.</p>
//           <img src="../images/customized-giveaway.jpg" alt="Tech Giveaways" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Giveaways;
import React from "react";
import { Title } from "@/components/common/Title";
import Image from "next/image";
import styles from "@/styles/Giveaways.module.scss"; // Import the SCSS file for styling

const giveawaysData = [
  {
    category: "Premium Giveaways",
    description: "Luxury corporate gifts with high-end branding.",
    images: [
      "/images/premium3.png",
      "/images/premium4.png",
      "/images/premium5.png",
     
    ],
  },
  {
    category: "Economy Giveaways",
    description: "Budget-friendly giveaways with maximum branding impact.",
    images: [
      "/images/promo-bags.png",
      "/images/promo-bags2.png",
      "/images/sleeve.png",

      "/images/stringBag.png",
      "/images/eco2.png",
      "/images/eco3.png",
      
      

    ],
  },
  {
    category: "Customized Giveaways",
    description: "Tailor-made promotional items to fit your brand.",
    images: [
      "/images/customized3.png",
      "/images/customized1.png",
      "/images/customized2.png",
    ],
  },
  {
    category: "Summer Giveaways",
    description: "Summer items to fit your brand.",
    images: [
      "/images/summer1.png",
      "/images/summer2.png",
      "/images/eco4.png",
    ],
  },
  {
    category: "Tech Giveaways",
    description: "High-tech promotional items for modern businesses.",
    images: [
      "/images/tech-1.png",
      "/images/tech-2.png",
      "/images/tech-3.png",
    ],
  },
];

const Giveaways = () => {
  return (
    <section className={styles.giveawaysPage}>
      <div className="container">
        <Title title="Giveaways" />
        <p className={styles.description}>
          Corporate & promotional gifts with custom branding options.
        </p>

        {giveawaysData.map((item, index) => (
          <div key={index} className={styles.categorySection}>
            <div className={styles.textContent}>
              <h2>{item.category}</h2>
              <p>{item.description}</p>
            </div>

            <div className={styles.imageGrid}>
              {item.images.map((img, i) => (
                <div key={i} className={styles.imageWrapper}>
                  <Image src={img} alt={item.category} width={300} height={200} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Giveaways;