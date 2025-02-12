import React from "react";
import { Title } from "@/components/common/Title";

const WebDevelopment = () => {
  return (
    <section className="expertise-detail">
      <div className="container">
        <Title title="Website Development" />
        <p>Custom websites and e-commerce solutions.</p>
        <img src="../images/webdev-banner.jpg" alt="Web Development" />
      </div>
    </section>
  );
};

export default WebDevelopment;
