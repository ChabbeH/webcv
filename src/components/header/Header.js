import React from "react";
import Cv from "./Cv";
import HeaderSocials from "./HeaderSocials";
import styled from "styled-components";
import { mobile } from "../../responsive";

function Header() {
  return (
    <HeaderContainer>
      <Container>
        <h5>Hej jag är</h5>
        <h1>Charbel Hannon</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <Cv />
        <HeaderSocials />

        <ScrollDown href="#contact">Skrolla Ner</ScrollDown>
      </Container>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  height: 40vh;
  padding-top: 7rem;
  overflow: hidden;
  width: var(--container-width-lg);
  margin: 0 auto;
  ${mobile({ paddingTop: "3rem", height: "19vh" })}
`;

const Container = styled.div`
  text-align: center;
  height: 50%;
  position: relative;
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
