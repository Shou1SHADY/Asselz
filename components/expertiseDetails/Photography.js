import React from "react";
import { Title } from "@/components/common/Title";
import Link from "next/link";
import { FaEnvelope, FaVideo ,FaCamera } from "react-icons/fa";

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
          {/* 🔹 Video Links */}
          <div className="video-links">
           
            <Link href="https://drive.google.com/drive/folders/1t0bcK0Xr9mgcbwVz1bw4oF35NArggkfC?usp=sharing" target="_blank" className="video-button">
              <FaCamera className="video-icon" /> Project Pictures (Google Drive)
            </Link>
            <Link href="https://drive.google.com/drive/folders/1_pG7SASoAHL-ngAJ2ZIcEHrQKFU0jodf?usp=sharing" target="_blank" className="video-button">
              <FaCamera className="video-icon" /> Event Pictures (Google Drive)
            </Link>
          </div>
        </div>

        {/* 🔹 Videography Section */}
        <div className="category-section">
          <h2 className="section-title">Videography Services</h2>
          <p className="section-description">
            Tell your brand’s story through high-quality video production for commercials, events, and promotional content.
          </p>

          {/* 🔹 Video Links */}
          <div className="video-links">
            <Link href="https://www.linkedin.com/posts/asellz-supply-69b41229b_lafargeegypt-holcim-buildingprogress-activity-7237778970404941825-TU3G?utm_source=share&utm_medium=member_android&rcm=ACoAADLtxCQBSRe7G_P3V_v5t7_9XenrccKLqOw" target="_blank" className="video-button">
              <FaVideo className="video-icon" /> Lafarge Egypt Project (LinkedIn)
            </Link>
            <Link href="https://www.linkedin.com/posts/lafargeegypt_lafargeegypt-holcim-buildingprogress-activity-7253753465527558144-h0DM?utm_source=share&utm_medium=member_android&rcm=ACoAADLtxCQBSRe7G_P3V_v5t7_9XenrccKLqOw" target="_blank" className="video-button">
              <FaVideo className="video-icon" /> Holcim Building Progress (LinkedIn)
            </Link>
            
          </div>
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

      {/* ✅ Inline CSS for styling */}
      <style jsx>{`
        .container {
          text-align: center;
          max-width: 800px;
          margin: auto;
          padding: 2rem;
        }

        .highlighted-title {
          color: #a020f0;
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
          margin-bottom: 1.5rem;
        }

        .video-links {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-top: 1rem;
        }

        .video-button {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #4a90e2;
          color: #fff;
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 1rem;
          text-decoration: none;
          font-weight: 500;
          transition: background-color 0.3s ease;
        }

        .video-button:hover {
          background-color: #357ab8;
        }

        .video-icon {
          margin-right: 8px;
          font-size: 1.3rem;
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
          margin-top: 2rem;
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
          .video-button {
            font-size: 0.95rem;
            padding: 10px 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default Photography;
