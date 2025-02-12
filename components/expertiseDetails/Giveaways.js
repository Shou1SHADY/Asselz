import React from "react";
import { Title } from "@/components/common/Title";

const Giveaways = () => {
  return (
    <section className="expertise-detail">
      <div className="container">
        <Title title="Giveaways" />
        <p>Corporate & promotional gifts with custom branding options.</p>

        {/* Premium Section */}
        <div className="category-section">
          <h2>Premium Giveaways</h2>
          <p>Luxury corporate gifts with high-end branding.</p>
          <img src="../images/premium-giveaway.jpg" alt="Premium Giveaways" />
        </div>

        {/* Economy Section */}
        <div className="category-section">
          <h2>Economy Giveaways</h2>
          <p>Budget-friendly giveaways with maximum branding impact.</p>
          <img src="../images/economy-giveaway.jpg" alt="Economy Giveaways" />
        </div>

        {/* Customized Section */}
        <div className="category-section">
          <h2>Customized Giveaways</h2>
          <p>Tailor-made promotional items to fit your brand.</p>
          <img src="../images/customized-giveaway.jpg" alt="Customized Giveaways" />
        </div>
      </div>
    </section>
  );
};

export default Giveaways;
