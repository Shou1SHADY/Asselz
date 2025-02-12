import Link from "next/link";
import { TitleSm } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";

export const Card = ({ data, caption, show, path = "/expertise" }) => {
  return (
    <div className="card">
      {/* ✅ Ensure the entire card links properly */}
      <Link href={`${path}/${data.id}`} className="card-link">
        <div className="card-img">
          <img style={{ width: "100%" }} src={data.cover} alt={data.title} />
        </div>
      </Link>

      <div className="card-details">
        {/* ✅ Ensure title links properly without <a> inside <Link> */}
        <Link href={`${path}/${data.id}`} className="title-link">
          <TitleSm title={data.title} />
        </Link>

        {/* ✅ Ensure "Learn More" is correctly linked */}
        {caption && (
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
    </div>
  );
};
