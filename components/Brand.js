import React from "react";
import { Title, TitleSm } from "./common/Title";
import { brand } from "@/assets/data/dummydata";

const Brand = () => {
  return (
    <section className='brand'>
      <div className='container'>
        <div className='heading-title'>
          <TitleSm title='TRUSTED BY' />
          <Title title='WE ARE PROUD TO WORK WITH THESE COMPANIES' className='title-bg' />
        </div>
      </div>
      <div className='brand-track-wrapper'>
        <div className='brand-track'>
          {[...brand, ...brand].map((item, i) => (
            <div className='brand-item' key={`${item.id}-${i}`}>
              <img src={item.cover} alt={`Client ${item.id}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;
