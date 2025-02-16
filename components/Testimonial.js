import React from "react";
import { TitleSm } from "./common/Title";
import Link from "next/link";
import { testimonial } from "@/assets/data/dummydata";
import { HiOutlineArrowRight } from "react-icons/hi";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { onClick } = props;
  return <button className='next' onClick={onClick}><RiArrowRightSLine size={25} /></button>;
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return <button className='prev' onClick={onClick}><RiArrowLeftSLine size={25} /></button>;
}

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [{ breakpoint: 800, settings: { slidesToShow: 1, dots: true } }]
  };

  return (
    <>
      <section className='testimonial'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='WHAT CLIENTS SAY ABOUT ASSELLZ' />
          </div>
          <div className='cards'>
            <Slider {...settings}>
              {testimonial.map((user, index) => (
                <div key={index} className='card'>
                  <div className='image'>
                    <div className='img'>
                      <img  src={user.cover} alt='' />
                    </div>
                    <div className='img-text'>
                      <h3>{user.name}</h3>
                      <span>{user.post}</span>
                    </div>
                  </div>
                  <div className='details'>
                    <p>{user.desc}</p>
                    {/* <Link href='/#'>VIEW CASE <HiOutlineArrowRight className='link-icon' /></Link> */}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
