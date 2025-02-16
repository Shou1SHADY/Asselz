import React from "react";
import { Title } from "@/components/common/Title";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

const Photography = () => {
  return (
    <section className="expertise-detail">
      <div className="container">
        <Title title="Photography & Videography" className="highlighted-title" />
        <p className="intro-text">
          We provide high-quality corporate, product, and event photography, along with professional videography services to bring your brand to life.
        </p>

        {/* 🔹 Photography Section */}
        <div className="category-section">
          <h2 className="section-title">Photography Services</h2>
          <p className="section-description">
            Capture stunning visuals with our professional photography services tailored for corporate, product, and event needs.
          </p>
        </div>

        {/* 🔹 Videography Section */}
        <div className="category-section">
          <h2 className="section-title">Videography Services</h2>
          <p className="section-description">
            Tell your brand’s story through high-quality video production for commercials, events, and promotional content.
          </p>
        </div>

        {/* 🔹 Contact Section */}
        <div className="contact-info">
          <FaEnvelope className="contact-icon" />
          <p>
            For custom photography & videography packages, please{" "}
            <Link href="/contact" className="contact-link">Contact Us</Link>.
          </p>
        </div>
      </div>

      <style jsx>{`
        .container {
          text-align: center;
          max-width: 800px;
          margin: auto;
          padding: 2rem;
        }
        .highlighted-title {
          color: #a020f0; /* Purple Highlight */
          font-weight: bold;
          font-size: 2.2rem;
        }
        .intro-text {
          font-size: 1.1rem;
          color: #ddd;
          margin-bottom: 2rem;
        }
        .category-section {
          margin-bottom: 2rem;
        }
        .section-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .section-description {
          font-size: 1rem;
          color: #bbb;
        }
        .contact-info {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          font-size: 1.2rem;
          font-weight: bold;
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
          padding: 1rem;
          border-radius: 10px;
        }
        .contact-icon {
          color: #f39c12;
          font-size: 1.5rem;
        }
        .contact-link {
          color: #f39c12;
          text-decoration: none;
          font-weight: bold;
        }
        .contact-link:hover {
          text-decoration: underline;
        }

        /* ✅ Mobile Responsiveness */
        @media screen and (max-width: 600px) {
          .highlighted-title {
            font-size: 1.8rem;
          }
          .intro-text {
            font-size: 1rem;
          }
          .section-title {
            font-size: 1.3rem;
          }
          .contact-info {
            font-size: 1rem;
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Photography;
