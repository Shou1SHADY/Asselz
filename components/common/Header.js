import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  // Scroll detection for navbar shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const handleCloseMenu = () => {
    if (window.innerWidth <= 800) {
      setOpen(false);
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/agency", label: "Company" },
    { href: "/services", label: "Services" },
    { href: "/showcase", label: "Showcase" },
  ];

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <Image 
              src="/images/output-onlinepngtools.png" 
              alt="Asellz Logo" 
              width={130} 
              height={44} 
              className="logo-image"
              priority
            />
          </Link>
        </div>
        <nav className={open ? "openMenu" : "closeMenu"}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={activeLink === link.href ? "activeLink" : ""}
              onClick={handleCloseMenu}
            >
              {link.label}
            </Link>
          ))}
          <div className="mobile-cta">
            <Link href="/contact" className="button-primary" onClick={handleCloseMenu}>
              Get in Touch <FaArrowRight size={14} />
            </Link>
          </div>
        </nav>
        <button className="toggle-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <AiOutlineClose size={22} /> : <RiMenu4Line size={22} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
