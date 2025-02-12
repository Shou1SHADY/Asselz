import React from "react";
import { Title } from "@/components/common/Title";

const Photography = () => {
  return (
    <section className="expertise-detail">
      <div className="container">
        <Title title="Photography" />
        <p>Corporate, product, and event photography.</p>
        <img src="../images/photography-banner.jpg" alt="Photography" />
      </div>
    </section>
  );
};

export default Photography;
