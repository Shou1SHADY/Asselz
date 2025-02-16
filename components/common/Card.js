import Link from "next/link";
import { TitleSm } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";

export const Card = ({ data, caption, show, path = "/expertise" }) => {
  const isComingSoon = data.title.includes("Coming soon");

  return (
    <div className={`card ${isComingSoon ? "disabled-card" : ""}`}>
      {/* ✅ Only make it clickable if it's NOT "Coming Soon" */}
      {!isComingSoon ? (
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
        {/* ✅ Ensure title is not clickable if "Coming Soon" */}
        {!isComingSoon ? (
          <Link href={`${path}/${data.id}`} className="title-link">
            <TitleSm title={data.title} />
          </Link>
        ) : (
          <TitleSm title={data.title} />
        )}

        {/* ✅ Ensure "Learn More" button is also disabled */}
        {!isComingSoon && caption && (
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
    </div>
  );
};
