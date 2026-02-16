import { useEffect, useState } from "react";
import {
  Nav,
  NavContainer,
  Logo,
  NavLinks,
  NavLink,
  Hamburger,
  MobileMenu
} from "./NavBar.styles";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav $scrolled={scrolled}>
      <NavContainer>
        <Logo>JMC Communications</Logo>

        <NavLinks>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavLinks>

        <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>

        {menuOpen && (
          <MobileMenu>
            <NavLink href="#services" onClick={() => setMenuOpen(false)}>Services</NavLink>
            <NavLink href="#about" onClick={() => setMenuOpen(false)}>About</NavLink>
            <NavLink href="#contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          </MobileMenu>
        )}
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
