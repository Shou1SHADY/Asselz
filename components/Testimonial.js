import React from "react";
import { TitleSm } from "./common/Title";
import { testimonial } from "@/assets/data/dummydata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

function SampleNextArrow(props) {
  const { onClick } = props;
  return <button className='next' onClick={onClick} aria-label="Next testimonial"><RiArrowRightSLine size={22} /></button>;
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return <button className='prev' onClick={onClick} aria-label="Previous testimonial"><RiArrowLeftSLine size={22} /></button>;
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
    <section className='testimonial'>
      <div className='container'>
        <div className='heading-title'>
          <TitleSm title='OUR CLIENTS' />
        </div>
        <div className='cards'>
          <Slider {...settings}>
            {testimonial.map((user, index) => (
              <div key={index} className='card'>
                <div className='image'>
                  <div className='img'>
                    <img src={user.cover} alt={user.name} />
                  </div>
                  <div className='img-text'>
                    <h3>{user.name}</h3>
                    <span>{user.post}</span>
                  </div>
                </div>
                <div className='details'>
                  {user.desc && <p>{user.desc}</p>}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
