import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";
import { mobile } from "../../responsive";

function Footer() {
  return (
    <FooterContainer>
      {/*      <FooterLogo href="#top" className="footer__logo">
        Logo
      </FooterLogo>

      <FooterLinks>
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="experience">Experience</a>
        </li>
        <li>
          <a href="portfolio">Portfolio</a>
        </li>
        <li>
          <a href="testimonials">Testimonials</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
      </FooterLinks> */}

      <FooterSocials>
        <a href="https://github.com/ChabbeH" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/charbel-hannon-747200b5/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </FooterSocials>

      <FooterCopyright>
        <small>&copy; Charbel Hannon. All rights reserved</small>
      </FooterCopyright>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  background: var(--color-primary);
  padding: 3rem 0;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 7rem;

  a {
    color: var(--color-bg);
  }
`;

/* const FooterLogo = styled.a`
  font-size: 2rem;
  font: 500;
  margin-bottom: 2rem;
  display: inline-block;
`;

const FooterLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto 3rem;
  ${mobile({ flexDirection: "column", gap: "1.5rem" })}
`; */

const FooterSocials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;

  a {
    background: var(--color-bg);
    color: var(--color-white);
    padding: 0.8rem;
    border-radius: 0.7rem;
    display: flex;
    border: 1px solid transparent;
  }

  a:hover {
    background: transparent;
    color: var(--color-bg);
    border-color: var(--color-bg);
  }

  ${mobile({ marginBottom: "2.6rem" })}
`;

const FooterCopyright = styled.div`
  margin-bottom: 4rem;
  color: var(--color-bg);
`;

export default Footer;
