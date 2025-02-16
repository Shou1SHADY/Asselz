import React from "react";
import { Title } from "@/components/common/Title";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

const WebDevelopment = () => {
  return (
    <section className="expertise-detail">
      <div className="container">
        <Title title="Web Development" className="highlighted-title" />
        <p className="intro-text">
          We offer professional web development services to create stunning, high-performance websites tailored to your business needs.
        </p>

        {/* 🔹 Web Development Services Section */}
        <div className="category-section">
          <h2 className="section-title">Our Web Development Services</h2>
          <p className="section-description">
            From corporate websites to full-fledged e-commerce solutions, we build user-friendly, responsive, and scalable websites to enhance your digital presence.
          </p>
        </div>

        {/* 🔹 Contact Section */}
        <div className="contact-info">
          <FaEnvelope className="contact-icon" />
          <p>
            For custom web development solutions, please{" "}
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
          color: #007bff; /* Blue Highlight */
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

export default WebDevelopment;
