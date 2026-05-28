import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import { Title, TitleSm } from "@/components/common/Title";
import { Brand } from "@/components/router";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='hero-logo'>
            <Image src='/images/output-onlinepngtools.png' alt='Asellz Logo' width={350} height={118} className='logo-image' priority unoptimized />
          </div>
          <h1 className='hero-title'>YOUR PARTNER IN GROWTH</h1>
          <p className='hero-subtitle'>
            Premium corporate giveaways, event production, and digital branding solutions trusted by leading companies worldwide.
          </p>
          <div className='sub-heading'>
            <TitleSm title='GIVEAWAYS' />
            <span>&middot;</span>
            <TitleSm title='EVENTS' />
            <span>&middot;</span>
            <TitleSm title='DIGITAL MARKETING' />
          </div>
          <div className='hero-cta'>
            <Link href='/contact' className='button-primary' style={{ display: 'inline-block', padding: '14px 36px', fontSize: '15px' }}>
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='WHY ASELLZ' />
            <Title title='Your trusted provider for quality products & services' className='title-bg' />
            <p>At Asellz, we deliver high-quality giveaways, event production, digital marketing, and branding solutions tailored for startups and corporations.</p>
          </div>
          <div className='hero-content'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <div className='icon-wrap'>
                  <span className='green'>{item.icon}</span>
                </div>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Expertise />
      <Banner />
      <ShowCase />
      <Brand />
    </>
  );
};

export default Hero;
