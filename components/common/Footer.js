import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

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
                <Link href='/expertise/2'>Events & Kittering</Link>
              </li>
              <li>
                <Link href='/expertise/1'>Giveaways</Link>
              </li>
              <li>
                <Link href='/expertise/3'>Photography & Videography</Link>
              </li>
              <li>
                <Link href='/expertise/4'>Social Media Marketing
                </Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  {/* <Link href='/'> */}
                    <BsFacebook size={25} />
                  {/* </Link> */}
                </li>
                {/* <li> */}
                  {/* <Link href='/'> */}
                    {/* <AiFillBehanceCircle size={25} /> */}
                  {/* </Link> */}
                {/* </li> */}
                <li>
                  {/* <Link href='/'> */}
                    <AiFillInstagram size={25} />
                  {/* </Link> */}
                </li>
                <li>
                  {/* <Link href='/'> */}
                    <AiFillLinkedin size={25} />
                  {/* </Link> */}
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2025 ASSELZ COMPANY. ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span>ASSELZ COMPANY</span>
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
