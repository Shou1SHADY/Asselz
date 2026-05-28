import React from "react";
import { Title } from "./common/Title";
import Link from "next/link";

const Banner = () => {
  return (
    <section className='banner'>
      <div className='container'>
        <div>
          <Title title='Ready to elevate your brand?' />
          <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '12px', fontSize: '18px' }}>
            Partner with Asellz for premium corporate solutions.
          </p>
        </div>
        <div>
          <Link href='/contact' className='secondary-button' style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
