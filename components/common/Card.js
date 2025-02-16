import Link from "next/link";
import { TitleSm } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";

export const Card = ({ data, caption, show, path = "/expertise", isShowcase = false }) => {
  const isComingSoon = data.title.includes("Coming soon");
  const isDisabled = isComingSoon || isShowcase; // ✅ Disable if "Coming Soon" or Showcase
const isDisabledColorComing = isComingSoon; 
  return (
    <div className={`card ${isDisabledColorComing ? "disabled-card" : ""}  ${isShowcase ? "disabled-card-showcase" : ""}`}>
      {/* ✅ Only make it clickable if it's NOT "Coming Soon" or in Showcase */}
      {!isDisabled ? (
        <Link href={`${path}/${data.id}`} className="card-link">
          <div className="card-img">
            <img style={{ width: "100%" }} src={data.cover} alt={data.title} />
          </div>
        </Link>
      ) : (
        <div className="card-img">
          <img style={{ width: "100%" }} src={data.cover} alt={data.title} />
        </div>
      )}

      <div className="card-details">
        {/* ✅ Ensure title is not clickable if "Coming Soon" or in Showcase */}
        {!isDisabled ? (
          <Link href={`${path}/${data.id}`} className="title-link">
            <TitleSm title={data.title} />
          </Link>
        ) : (
          <TitleSm title={data.title} />
        )}

        {/* ✅ Ensure "Learn More" button is also disabled */}
        {!isDisabled && caption && (
          <Link href={`${path}/${data.id}`} className="learn-more-button">
            {caption} <HiOutlineArrowRight className="link-icon" />
          </Link>
        )}

        <div className="flex">
          <span> {data.catgeory} </span> {data.date && <span> / {data.date}</span>}
        </div>

        {show && (
          <ul>
            {data.desc.map((text, i) => (
              <li key={i}> - {text.text}</li>
            ))}
          </ul>
        )}
      </div>

      {/* 🔹 Add CSS Styling to visually indicate it's disabled */}
      <style jsx>{`
        .disabled-card {
          pointer-events: none; /* Prevent Clicks */
          opacity: 0.6; /* Dim to indicate inactive */
          cursor: not-allowed; /* Show restricted cursor */
        }
      `}</style>
        <style jsx>{`
        .disabled-card-showcase {
          pointer-events: none; /* Prevent Clicks */
        
          cursor: not-allowed; /* Show restricted cursor */
        }
      `}</style>
    </div>
  );
};
