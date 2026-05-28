import React from "react";
import { Title, TitleSm } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";

const Expertise = () => {
  return (
    <section className="expertise">
      <div className="container">
        <div className="heading-title">
          <TitleSm title="OUR EXPERTISE" />
          <Title title="Comprehensive solutions for your brand" className="title-bg" />
          <p>We specialize in branding, digital marketing, and corporate giveaways to help businesses grow and strengthen their market presence.</p>
        </div>
        <div className="hero-content">
          {expertise.map((item) => (
            <Card data={item} key={item.id} caption="Learn More" path="/expertise" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
