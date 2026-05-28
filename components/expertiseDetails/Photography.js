import React from "react";
import Link from "next/link";
import {
  FaCamera,
  FaVideo,
  FaEnvelope,
  FaArrowRight,
  FaGoogleDrive,
  FaLinkedin,
  FaCheckCircle,
  FaStar,
  FaLightbulb,
  FaHandshake,
  FaImage,
  FaFilm,
  FaLaptop,
} from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

const Photography = () => {
  return (
    <section className="photography-page">
      {/* ===== HERO BANNER ===== */}
      <div className="hero-banner">
        <div className="container">
          <div className="icon-circle">
            <FaCamera size={36} />
          </div>
          <h1 className="hero-title">Photography & Videography</h1>
          <p className="hero-subtitle">
            High-quality corporate, product, and event photography paired with
            professional videography — crafted to bring your brand story to
            life.
          </p>
        </div>
      </div>

      {/* ===== FEATURE HIGHLIGHTS ===== */}
      <div className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <FaStar size={24} />
              </div>
              <h3 className="feature-card-title">Professional Quality</h3>
              <p className="feature-card-desc">
                Studio-grade equipment and expert editing for flawless results
                every time.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <FaLightbulb size={24} />
              </div>
              <h3 className="feature-card-title">Creative Direction</h3>
              <p className="feature-card-desc">
                Tailored visual concepts that align with your brand identity
                and goals.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <FaHandshake size={24} />
              </div>
              <h3 className="feature-card-title">End-to-End Service</h3>
              <p className="feature-card-desc">
                From planning and shooting to post-production and delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== OUR PROCESS ===== */}
      <div className="process-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">How We Work</div>
            <h2 className="section-heading">Our Creative Process</h2>
            <div className="section-divider" />
          </div>
          <div className="process-grid">
            <div className="process-step">
              <div className="process-step-num">1</div>
              <div className="process-line" />
              <h4 className="process-step-title">Brief & Plan</h4>
              <p className="process-step-desc">
                We understand your vision, audience, and objectives to craft a
                detailed shoot plan.
              </p>
            </div>
            <div className="process-step">
              <div className="process-step-num">2</div>
              <div className="process-line" />
              <h4 className="process-step-title">Capture</h4>
              <p className="process-step-desc">
                On-location or in-studio shooting with top-tier equipment and
                direction.
              </p>
            </div>
            <div className="process-step">
              <div className="process-step-num">3</div>
              <h4 className="process-step-title">Deliver</h4>
              <p className="process-step-desc">
                Professional editing, color grading, and final delivery in your
                preferred formats.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== PHOTOGRAPHY SERVICES ===== */}
      <div className="service-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Our Portfolio</div>
            <h2 className="section-heading">Photography Services</h2>
            <div className="section-divider" />
            <p className="section-description">
              Explore our professional photography work across corporate
              projects, events, and product shoots.
            </p>
          </div>
          <div className="link-cards-grid">
            <Link
              href="https://drive.google.com/drive/folders/1t0bcK0Xr9mgcbwVz1bw4oF35NArggkfC?usp=sharing"
              target="_blank"
              className="link-card"
            >
              <div className="link-card-icon-wrap blue">
                <FaGoogleDrive size={22} />
              </div>
              <div className="link-card-body">
                <div className="link-card-label">Google Drive</div>
                <div className="link-card-text">Project Pictures</div>
              </div>
              <FaArrowRight size={16} className="link-card-arrow" />
            </Link>

            <Link
              href="https://drive.google.com/drive/folders/1_pG7SASoAHL-ngAJ2ZIcEHrQKFU0jodf?usp=sharing"
              target="_blank"
              className="link-card"
            >
              <div className="link-card-icon-wrap purple">
                <FaGoogleDrive size={22} />
              </div>
              <div className="link-card-body">
                <div className="link-card-label">Google Drive</div>
                <div className="link-card-text">Event Pictures</div>
              </div>
              <FaArrowRight size={16} className="link-card-arrow" />
            </Link>
          </div>
        </div>
      </div>

      {/* ===== VIDEOGRAPHY SERVICES ===== */}
      <div className="service-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Our Portfolio</div>
            <h2 className="section-heading">Videography Services</h2>
            <div className="section-divider" />
            <p className="section-description">
              Watch our latest video productions for leading brands including
              Lafarge Egypt and Holcim.
            </p>
          </div>
          <div className="link-cards-grid">
            <Link
              href="https://www.linkedin.com/posts/asellz-supply-69b41229b_lafargeegypt-holcim-buildingprogress-activity-7237778970404941825-TU3G?utm_source=share&utm_medium=member_android&rcm=ACoAADLtxCQBSRe7G_P3V_v5t7_9XenrccKLqOw"
              target="_blank"
              className="link-card"
            >
              <div className="link-card-icon-wrap gold">
                <FaLinkedin size={22} />
              </div>
              <div className="link-card-body">
                <div className="link-card-label">LinkedIn</div>
                <div className="link-card-text">
                  Lafarge Egypt Project
                </div>
              </div>
              <FaArrowRight size={16} className="link-card-arrow" />
            </Link>

            <Link
              href="https://www.linkedin.com/posts/lafargeegypt_lafargeegypt-holcim-buildingprogress-activity-7253753465527558144-h0DM?utm_source=share&utm_medium=member_android&rcm=ACoAADLtxCQBSRe7G_P3V_v5t7_9XenrccKLqOw"
              target="_blank"
              className="link-card"
            >
              <div className="link-card-icon-wrap purple">
                <FaLinkedin size={22} />
              </div>
              <div className="link-card-body">
                <div className="link-card-label">LinkedIn</div>
                <div className="link-card-text">
                  Holcim Building Progress
                </div>
              </div>
              <FaArrowRight size={16} className="link-card-arrow" />
            </Link>
          </div>
        </div>
      </div>

      {/* ===== WHAT WE COVER ===== */}
      <div className="service-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Services</div>
            <h2 className="section-heading">What We Cover</h2>
            <div className="section-divider" />
          </div>
          <div className="link-cards-grid">
            <div className="link-card">
              <div className="link-card-icon-wrap gold">
                <FaImage size={20} />
              </div>
              <div className="link-card-body">
                <div className="link-card-label">Photography</div>
                <div className="link-card-text">
                  Corporate · Product · Event
                </div>
              </div>
              <FaCheckCircle size={18} color="#4ade80" />
            </div>
            <div className="link-card">
              <div className="link-card-icon-wrap purple">
                <FaFilm size={20} />
              </div>
              <div className="link-card-body">
                <div className="link-card-label">Videography</div>
                <div className="link-card-text">
                  Commercial · Event · Promo
                </div>
              </div>
              <FaCheckCircle size={18} color="#4ade80" />
            </div>
            <div className="link-card">
              <div className="link-card-icon-wrap blue">
                <FaLaptop size={20} />
              </div>
              <div className="link-card-body">
                <div className="link-card-label">Editing</div>
                <div className="link-card-text">
                  Color Grading · Retouching
                </div>
              </div>
              <FaCheckCircle size={18} color="#4ade80" />
            </div>
            <div className="link-card">
              <div className="link-card-icon-wrap green">
                <IoDiamondOutline size={20} />
              </div>
              <div className="link-card-body">
                <div className="link-card-label">Custom</div>
                <div className="link-card-text">
                  Tailored Packages
                </div>
              </div>
              <FaCheckCircle size={18} color="#4ade80" />
            </div>
          </div>
        </div>
      </div>

      {/* ===== STATS ===== */}
      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">50+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">30+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">100+</div>
              <div className="stat-label">Events Covered</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CTA BANNER ===== */}
      <div className="container">
        <div className="cta-banner">
          <div className="cta-content">
            <FaEnvelope size={28} style={{ color: "rgba(255,255,255,0.7)", marginBottom: 16 }} />
            <h2 className="cta-title">
              Ready to Capture Something Great?
            </h2>
            <p className="cta-subtitle">
              Let us discuss your next project — from a single shoot to a
              full-scale production. Tailored packages available.
            </p>
            <div>
              <Link href="/contact" className="cta-button">
                <FaEnvelope size={14} />
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ===== KEYFRAMES ===== */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 25px rgba(108,92,231,0.12); }
          50%      { box-shadow: 0 0 45px rgba(108,92,231,0.3); }
        }

        .photography-page {
          padding-bottom: 100px;
          overflow: hidden;
        }

        /* ===== HERO BANNER ===== */
        .hero-banner {
          position: relative;
          padding: 80px 0 60px;
          text-align: center;
          overflow: hidden;
        }
        .hero-banner::before {
          content: "";
          position: absolute;
          top: -40%;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(108,92,231,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-banner::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #6c5ce7, #a29bfe, #6c5ce7, transparent);
          border-radius: 2px;
        }

        .icon-circle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(108,92,231,0.2) 0%, rgba(162,155,254,0.1) 100%);
          border: 1px solid rgba(108,92,231,0.25);
          margin-bottom: 28px;
          animation: float 4s ease-in-out infinite, glow 3s ease-in-out infinite;
          color: #a29bfe;
          position: relative;
          z-index: 1;
        }

        .hero-title {
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 16px;
          background: linear-gradient(180deg, #fff 0%, #cbd5e1 60%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeInUp 0.7s ease-out 0.15s forwards;
          opacity: 0;
          position: relative;
          z-index: 1;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          line-height: 1.7;
          color: #94a3b8;
          max-width: 680px;
          margin: 0 auto 20px;
          animation: fadeInUp 0.7s ease-out 0.3s forwards;
          opacity: 0;
          position: relative;
          z-index: 1;
        }

        /* ===== FEATURE HIGHLIGHTS ===== */
        .features-section {
          padding: 60px 0 40px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 960px;
          margin: 0 auto;
        }

        .feature-card {
          background: #111827;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .feature-card:nth-child(1) { animation-delay: 0.1s; }
        .feature-card:nth-child(2) { animation-delay: 0.25s; }
        .feature-card:nth-child(3) { animation-delay: 0.4s; }
        .feature-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #6c5ce7, #a29bfe);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .feature-card:hover {
          border-color: rgba(108,92,231,0.3);
          box-shadow: 0 8px 30px rgba(108,92,231,0.15), 0 0 0 1px rgba(108,92,231,0.15);
          transform: translateY(-6px);
        }
        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-icon-wrap {
          width: 56px;
          height: 56px;
          margin: 0 auto 16px;
          background: rgba(108,92,231,0.1);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: #a29bfe;
        }
        .feature-card:hover .feature-icon-wrap {
          background: rgba(108,92,231,0.2);
          transform: scale(1.08);
        }

        .feature-card-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 8px;
        }

        .feature-card-desc {
          font-size: 0.9rem;
          color: #94a3b8;
          line-height: 1.5;
        }

        /* ===== PROCESS SECTION ===== */
        .process-section {
          padding: 60px 0 20px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 48px;
          opacity: 0;
          animation: fadeInUp 0.7s ease-out 0.2s forwards;
        }

        .section-label {
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #a29bfe;
          margin-bottom: 8px;
        }

        .section-heading {
          font-size: 1.75rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
        }

        .section-description {
          font-size: 1rem;
          color: #94a3b8;
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .section-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #6c5ce7, #a29bfe);
          border-radius: 2px;
          margin: 16px auto 0;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          max-width: 860px;
          margin: 0 auto;
        }

        .process-step {
          text-align: center;
          position: relative;
        }

        .process-step-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6c5ce7, #a29bfe);
          color: #fff;
          font-weight: 700;
          font-size: 1.2rem;
          margin-bottom: 16px;
          transition: all 0.3s ease;
        }
        .process-step:hover .process-step-num {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(108,92,231,0.4);
        }

        .process-line {
          position: absolute;
          top: 24px;
          left: calc(50% + 30px);
          width: calc(100% - 12px);
          height: 1px;
          background: linear-gradient(90deg, rgba(108,92,231,0.4), rgba(108,92,231,0.05));
        }
        .process-step:last-child .process-line {
          display: none;
        }

        .process-step-title {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 6px;
        }

        .process-step-desc {
          font-size: 0.85rem;
          color: #94a3b8;
          line-height: 1.5;
        }

        /* ===== SERVICE SECTION ===== */
        .service-section {
          padding: 50px 0 20px;
        }

        /* ===== LINK CARDS GRID ===== */
        .link-cards-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          max-width: 860px;
          margin: 0 auto;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }
        .link-cards-grid .link-card {
          flex: 0 1 calc(50% - 10px);
          max-width: 420px;
        }

        .link-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: #111827;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          padding: 20px 24px;
          text-decoration: none;
          color: #fff;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .link-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(108,92,231,0.08) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .link-card:hover {
          border-color: rgba(108,92,231,0.3);
          box-shadow: 0 8px 25px rgba(108,92,231,0.12);
          transform: translateY(-4px);
          color: #fff;
        }
        .link-card:hover::after {
          opacity: 1;
        }

        .link-card-icon-wrap {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }
        .link-card:hover .link-card-icon-wrap {
          transform: scale(1.1);
        }

        .link-card-icon-wrap.blue   { background: rgba(59,130,246,0.15); color: #60a5fa; }
        .link-card-icon-wrap.purple { background: rgba(108,92,231,0.15); color: #a29bfe; }
        .link-card-icon-wrap.gold   { background: rgba(212,168,67,0.15); color: #d4a843; }
        .link-card-icon-wrap.green  { background: rgba(34,197,94,0.15); color: #4ade80; }

        .link-card-body {
          position: relative;
          z-index: 1;
          min-width: 0;
          flex: 1;
        }

        .link-card-label {
          font-size: 0.75rem;
          font-weight: 500;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 2px;
        }

        .link-card-text {
          font-size: 1rem;
          font-weight: 600;
          color: #cbd5e1;
          line-height: 1.3;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .link-card-arrow {
          flex-shrink: 0;
          color: #94a3b8;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateX(-8px);
        }
        .link-card:hover .link-card-arrow {
          opacity: 1;
          transform: translateX(0);
          color: #a29bfe;
        }

        /* ===== STATS ===== */
        .stats-section {
          padding: 60px 0 40px;
          text-align: center;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 860px;
          margin: 0 auto;
        }

        .stat-item {
          text-align: center;
          padding: 20px 12px;
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .stat-item:nth-child(1) { animation-delay: 0.1s; }
        .stat-item:nth-child(2) { animation-delay: 0.2s; }
        .stat-item:nth-child(3) { animation-delay: 0.3s; }
        .stat-item:nth-child(4) { animation-delay: 0.4s; }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #a29bfe 0%, #d4a843 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 0.8rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 500;
        }

        /* ===== CTA BANNER ===== */
        .cta-banner {
          margin: 60px auto 40px;
          max-width: 860px;
          border-radius: 20px;
          padding: 48px 40px;
          background: linear-gradient(135deg, #6c5ce7 0%, #4c3eb5 100%);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-banner::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.12) 0%, transparent 50%);
        }
        .cta-banner::after {
          content: "";
          position: absolute;
          top: -40px;
          right: -40px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.08);
        }

        .cta-content {
          position: relative;
          z-index: 1;
        }

        .cta-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
        }

        .cta-subtitle {
          font-size: 1rem;
          color: rgba(255,255,255,0.7);
          margin-bottom: 28px;
          line-height: 1.5;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 36px;
          background: #fff;
          color: #6c5ce7;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.25);
          color: #6c5ce7;
        }
        .cta-button:active {
          transform: translateY(0);
        }

        /* ===== RESPONSIVE ===== */
        @media screen and (max-width: 800px) {
          .features-grid,
          .process-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
          }
          .link-cards-grid {
            grid-template-columns: 1fr;
            max-width: 420px;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .process-line { display: none; }
          .hero-banner { padding: 50px 0 40px; }
        }

        @media screen and (max-width: 500px) {
          .link-cards-grid { max-width: 100%; }
          .stats-grid { gap: 16px; }
          .stat-value { font-size: 1.5rem; }
          .cta-banner { padding: 32px 24px; }
          .cta-title { font-size: 1.25rem; }
          .hero-title { font-size: 1.7rem; }
          .section-heading { font-size: 1.35rem; }
          .feature-card { padding: 24px 16px; }
        }
      `}</style>
    </section>
  );
};

export default Photography;
