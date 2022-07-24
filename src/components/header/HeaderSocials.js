import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";
import { mobile } from "../../responsive";

function HeaderSocials() {
  return (
    <HeaderSocialsContainer>
      <a
        href="https://www.linkedin.com/in/charbel-hannon-747200b5/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/ChabbeH" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </HeaderSocialsContainer>
  );
}

const HeaderSocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  left: 0;
  bottom: 3rem;

  &:after {
    content: "";
    width: 1px;
    height: 2rem;
    background: var(--color-primary);
  }

  ${mobile({ display: "none" })}
`;

export default HeaderSocials;
