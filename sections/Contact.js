import { Title, TitleSm } from "@/components/common/Title";
import React, { useState } from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    timeframe: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResponseMessage(data.message);
      setFormData({ name: "", email: "", budget: "", timeframe: "", message: "" });
    } catch (error) {
      setResponseMessage("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="Let's start your project today!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-details'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>01065586886</h3>
                  <span>Call us: Mon - Fri 9:00 - 18:00</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>Asellz Office</h3>
                  <span>Based in Egypt – Serving clients globally</span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>marketing@asellz.com</h3>
                  <span>Reach out anytime for inquiries!</span>
                </div>
                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3>marketing@asellz.com</h3>
                  <span>Careers at Asellz</span>
                </div>
              </div>
              <ul>
                <li className='icon'>
                  <a href='https://facebook.com/asellz' target='_blank' rel='noopener noreferrer' aria-label="Follow Asellz on Facebook">
                    <BsFacebook size={25} />
                  </a>
                </li>
                <li className='icon'>
                  <a href='https://instagram.com/asellz' target='_blank' rel='noopener noreferrer' aria-label="Follow Asellz on Instagram">
                    <AiFillInstagram size={25} />
                  </a>
                </li>
                <li className='icon'>
                  <a href='https://linkedin.com/company/asellz' target='_blank' rel='noopener noreferrer' aria-label="Follow Asellz on LinkedIn">
                    <AiFillLinkedin size={25} />
                  </a>
                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Make an online inquiry' />
              <p className='desc-p'>Have questions or ideas? Fill out the form below and we'll get back to you with our proposal.</p>

              <form onSubmit={handleSubmit}>
                <div className='grid-2'>
                  <div className='inputs'>
                    <label htmlFor='name'>Name</label>
                    <input id='name' type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Enter your name' required />
                  </div>
                  <div className='inputs'>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Enter your email' required />
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <label htmlFor='budget'>Budget</label>
                    <input id='budget' type='text' name='budget' value={formData.budget} onChange={handleChange} placeholder='Estimated budget' required />
                  </div>
                  <div className='inputs'>
                    <label htmlFor='timeframe'>Timeframe</label>
                    <input id='timeframe' type='text' name='timeframe' value={formData.timeframe} onChange={handleChange} placeholder='Project deadline' required />
                  </div>
                </div>
                <div className='inputs'>
                  <label htmlFor='message'>Tell us about your project*</label>
                  <textarea id='message' name='message' cols='30' rows='10' value={formData.message} onChange={handleChange} placeholder='Describe your project in detail' required></textarea>
                </div>
                <button type='submit' className='button-primary' disabled={loading}>
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>

              {responseMessage && <p className="response-message">{responseMessage}</p>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
