import React from "react";
import { Title, TitleLogo } from "./common/Title";

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='We are ready to help you grow' /> <br />
            <TitleLogo title='Get in touch today!' />
          </div>
          <div>
            <button className='button-primary'>Request a Consultation</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
