import React from "react";
import { Title } from "./common/Title";
import { showcase } from "@/assets/data/dummydata";
import { Card } from "./common/Card";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

const ShowCase = () => {
  return (
    <>
      <section className="showcase">
        <div className="container">
          <div className="heading-title">
            <Title title="Selected cases" />
          </div>
          <div className="grid-3">
            {showcase.map((item) => (
              <Card data={item} key={item.id} isShowcase={true} />
            ))}
          </div>
          <div className="btn">
            <Link href="/showcase" className="button-primary">
              VIEW ALL CASES <HiOutlineArrowRight className="link-icon" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowCase;
