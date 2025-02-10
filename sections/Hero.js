import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <TitleLogo title='Asellz' caption='Global Supplier' className='logobg' />
          <h1 className='hero-title'>YOUR PARTNER IN GROWTH</h1>

          <div className='sub-heading'>
            <TitleSm title='GIVEAWAYS' /> <span>.</span>
            <TitleSm title='EVENTS' /> <span>.</span>
            <TitleSm title='SOCIAL MEDIA MARKETING' />
          </div>
        </div>
      </section>

      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Your trusted provider for quality products & services' />
            <p>At Asellz, we deliver high-quality giveaways, event production, digital marketing, and branding solutions tailored for startups and corporations.</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br /><br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard />
    </>
  );
};

export default Hero;
