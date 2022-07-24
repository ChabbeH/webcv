import React from "react";
import Cv from "./Cv";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/me.png";
import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

function Header() {
  return (
    <HeaderContainer>
      <Container>
        <h5>Hej jag är</h5>
        <h1>Charbel Hannon</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <Cv />
        <HeaderSocials />

        <ImgContainer>
          <img src={ME} alt="me" />
        </ImgContainer>

        <ScrollDown href="#contact">Skrolla Ner</ScrollDown>
      </Container>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  height: 80vh;
  padding-top: 7rem;
  overflow: hidden;
  width: var(--container-width-lg);
  margin: 0 auto;
  ${mobile({ height: "60vh", marginRight: "3.2rem" })}
`;

const Container = styled.div`
  text-align: center;
  height: 50%;
  position: relative;
`;

const ImgContainer = styled.div`
  background: linear-gradient(var(--color-primary), transparent);
  width: 22rem;
  height: 30rem;
  position: absolute;
  left: calc(50% - 11rem);
  margin-top: 4rem;
  border-radius: 8rem 8rem 0 0;
  overflow: hidden;
  padding: 5rem 1.5rem 1.5rem 1, 5rem;
`;

const ScrollDown = styled.a`
  position: absolute;
  right: -1.3rem;
  bottom: 5rem;
  transform: rotate(90deg);
  font-weight: 300;
  font-size: 0.9rem;

  ${mobile({ display: "none" })}
`;

export default Header;
