import Link from "next/link"
import { TitleLogo } from "./Title"
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              {/* <TitleLogo title='sellz' caption='A'  className='logobg' /> */}
              <br />
              <span>
                Questions? Reach us <br /> 24/7
              </span>
              <br />
              {/* <br />
              <h3>+1 001 234 5678</h3> */}
              {/* <br /> */}
              {/* <button className='button-primary'>Request for quote</button> */}
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/agency'>About us</Link>
              </li>
              {/* <li>
                <Link href='/'>Our team</Link>
              </li> */}
              <li>
                <Link href='/showcase'>Showcase</Link>
              </li>
              {/* <li>
                <Link href='/'>Blog</Link>
              </li> */}
              {/* <li>
                <Link href='/'>Demo design system</Link>
              </li> */}
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/expertise/5'>Web Design & Development</Link>
              </li>
              <li>
                <Link href='/expertise/2'>Events & Catering</Link>
              </li>
              <li>
                <Link href='/expertise/1'>Giveaways</Link>
              </li>
              <li>
                <Link href='/expertise/3'>Photography & Videography</Link>
              </li>
              {/* <li>
                <Link href='/expertise/4'>Social Media Marketing
                </Link>
              </li> */}
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <a href='https://instagram.com/asellz' target='_blank' rel='noopener noreferrer' aria-label="Follow Asellz on Instagram">
                    <AiFillInstagram size={25} />
                  </a>
                </li>
                <li>
                  <a href='https://linkedin.com/company/asellz' target='_blank' rel='noopener noreferrer' aria-label="Follow Asellz on LinkedIn">
                    <AiFillLinkedin size={25} />
                  </a>
                </li>
                <li>
                  <a href='https://wa.me/201065586886' target='_blank' rel='noopener noreferrer' aria-label="Contact Asellz on WhatsApp">
                    <FaWhatsapp size={25} />
                  </a>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2025 ASELLZ COMPANY. ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span>ASELLZ COMPANY</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
