import Link from "next/link";
import { TitleSm } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";

export const Card = ({ data, caption, show, path = "/expertise", isShowcase = false }) => {
  const isComingSoon = data.title.includes("Coming soon");
  const isDisabled = isComingSoon || isShowcase;
  const isDisabledColorComing = isComingSoon;
  
  return (
    <div className={`card ${isDisabledColorComing ? "disabled-card" : ""} ${isShowcase ? "disabled-card-showcase" : ""}`}>
      {!isDisabled ? (
        <Link href={`${path}/${data.id}`} className="card-link">
          <div className="card-img">
            <img style={{ width: "100%" }} src={data.cover} alt={data.title} loading="lazy" />
          </div>
        </Link>
      ) : (
        <div className="card-img">
          <img style={{ width: "100%" }} src={data.cover} alt={data.title} loading="lazy" />
        </div>
      )}

      <div className="card-details">
        {!isDisabled ? (
          <Link href={`${path}/${data.id}`} className="title-link">
            <TitleSm title={data.title} />
          </Link>
        ) : (
          <TitleSm title={data.title} />
        )}

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

      <style jsx>{`
        .disabled-card {
          pointer-events: none;
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
      <style jsx>{`
        .disabled-card-showcase {
          pointer-events: none;
          cursor: default;
        }
        .disabled-card-showcase:hover {
          transform: none;
          border-color: rgba(255,255,255,0.06);
          box-shadow: none;
        }
        .disabled-card-showcase:hover .card-img img {
          transform: none;
        }
      `}</style>
    </div>
  );
};
