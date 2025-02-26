import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";

const Agency = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="ABOUT ASELLZ" /> <br />
            <br />
            <Title title="Your Trusted Partner for Corporate Branding & Supply" className="title-bg" />
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="Delivering Premium Corporate & Promotional Solutions" />
              <p className="desc-p">
                Asellz is a leading provider of high-quality corporate giveaways, stationery, digital marketing, and
                promotional products. We specialize in custom branding solutions that help businesses strengthen
                their identity and customer engagement. Over the years, we have built long-lasting relationships with
                top corporations and startups by offering tailor-made solutions that drive brand visibility and loyalty.
              </p>
              <div className="grid-3">
                <div className="box">
                  <h1 className="indigo">5+</h1>
                  <h3>Years of Experience</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">10+</h1>
                  <h3>Corporate Clients</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">200+</h1>
                  <h3>Projects Delivered</h3>
                </div>
              </div>
            </div>
            <div className="right w-40 ml">
              <img src="/images/s1.jpg" alt="Asellz Team" className="round" width="100%" height="100%" />
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <img src="/images/s4.jpg" alt="Our Mission" className="round" width="100%" height="100%" />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our Mission" />
              <br />
              <p className="misson-p">
                At Asellz, our mission is to empower businesses with top-quality branding, giveaways, and promotional
                materials. We understand the power of branding, which is why we offer customized solutions that
                elevate corporate identity and marketing efforts. Our goal is to provide innovative, high-quality products
                at competitive prices while ensuring exceptional customer service at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      {/* <Testimonial /> */}
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
