import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiSuitcaseLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import styled from "styled-components";

function Nav() {
  const [activeNav, setActivceNav] = useState("#top");
  return (
    <NavContainer>
      <LinksContainer
        href="#"
        onClick={() => setActivceNav("#top")}
        className={activeNav === "#top" ? "active" : ""}
      >
        <AiOutlineHome />
      </LinksContainer>
      <LinksContainer
        href="#about"
        onClick={() => setActivceNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </LinksContainer>
      <LinksContainer
        href="#experience"
        onClick={() => setActivceNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </LinksContainer>
      <LinksContainer
        href="#portfolio"
        onClick={() => setActivceNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiSuitcaseLine />
      </LinksContainer>
      <LinksContainer
        href="#contact"
        onClick={() => setActivceNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </LinksContainer>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  display: block;
  padding: 0.7rem 1.7rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);
`;

const LinksContainer = styled.a`
  background: transparent;
  padding: 0.9rem;
  border-radius: 50%;
  display: flex;
  color: var(--color-light);
  font-size: 1.1rem;

  :hover {
    background: rgba(0, 0, 0, 0.3);
  }

  &.active {
    background: var(--color-primary);
    color: var(--color-bg);
  }
`;

export default Nav;
