import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // Close menu when a link is clicked (only on mobile)
  const handleCloseMenu = () => {
    if (window.innerWidth <= 800) {
      setOpen(false);
    }
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <Image 
              src="/images/output-onlinepngtools.png" 
              alt="Asselz Logo" 
              width={170} 
              height={60} 
              className="logo-image"
            />
          </Link>
        </div>
        <nav className={open ? "openMenu" : "closeMenu"}>
          <Link href="/" className={activeLink == "/" ? "activeLink" : "none"} onClick={handleCloseMenu}>
            Home
          </Link>
          <Link href="/agency" className={activeLink == "/agency" ? "activeLink" : "none"} onClick={handleCloseMenu}>
            Company
          </Link>
          <Link href="/services" className={activeLink == "/services" ? "activeLink" : "none"} onClick={handleCloseMenu}>
            Services
          </Link>
          <Link href="/showcase" className={activeLink == "/showcase" ? "activeLink" : "none"} onClick={handleCloseMenu}>
            Showcase
          </Link>
          {/* <Link href="/blogs" className={activeLink == "/blogs" ? "activeLink" : "none"} onClick={handleCloseMenu}>
            Blog
          </Link> */}
          <Link href="/contact" className={activeLink == "/contact" ? "activeLink" : "none"} onClick={handleCloseMenu}>
            Contact
          </Link>
        </nav>
        <button className="toggle-button" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
