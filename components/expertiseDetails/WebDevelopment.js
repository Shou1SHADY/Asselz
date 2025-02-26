import React from "react";
import { Title } from "@/components/common/Title";
import Link from "next/link";
import { FaEnvelope, FaGlobe } from "react-icons/fa";

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

        {/* 🔹 Sample Project Section */}
        <div className="sample-project">
          <h2 className="section-title">Sample of Our Work</h2>
          <p className="section-description">
            We take pride in delivering high-quality websites. Here’s a sample of our recent project:
          </p>
          <Link
            href="https://momo-travel.com"
            target="_blank"
            className="project-link"
          >
            <FaGlobe className="project-icon" /> Visit Sample Project
          </Link>
        </div>

        {/* 🔹 Asellz Website Note */}
        <div className="asellz-note">
          <p>
            🚀 Did you know? This website you're browsing is self-developed by our <strong>awesome dev team</strong>!
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
          color: #007bff;
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
          margin-bottom: 1rem;
        }

        /* 🔹 Sample Project Styling */
        .sample-project {
          margin: 2rem 0;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          background-color: #28a745;
          color: #fff;
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 500;
          text-decoration: none;
          margin-top: 10px;
          transition: background-color 0.3s ease;
        }

        .project-link:hover {
          background-color: #218838;
        }

        .project-icon {
          margin-right: 8px;
          font-size: 1.3rem;
        }

        /* 🔹 Asellz Website Note */
        .asellz-note {
          background: rgba(0, 123, 255, 0.1);
          padding: 1rem;
          border-radius: 10px;
          margin: 1.5rem 0;
          font-size: 1rem;
          font-weight: 500;
          color: #007bff;
        }

        .asellz-note strong {
          color: #ff6347; /* Highlight the dev team mention */
        }

        /* 🔹 Contact Section */
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

          .intro-text,
          .section-description {
            font-size: 1rem;
          }

          .section-title {
            font-size: 1.3rem;
          }

          .project-link {
            font-size: 0.95rem;
            padding: 10px 15px;
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
