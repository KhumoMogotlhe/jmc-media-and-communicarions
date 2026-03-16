import styled from "styled-components";

interface NavProps {
  $scrolled: boolean;
}

export const Nav = styled.nav<NavProps>`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  padding: 1.2rem 0;
  background-color: ${({ $scrolled }) =>
    $scrolled ? "#0a192f" : "transparent"};
  transition: all 0.3s ease;
`;

export const NavContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: white;
  font-weight: 500;
  cursor: pointer;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #4da6ff;
    transition: 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;

  span {
    height: 3px;
    width: 25px;
    background: white;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: #0a192f;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem;

  a {
    color: white;
  }
`;
