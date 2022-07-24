import React from "react";
import styled from "styled-components";
import ME from "../../assets/me.png";
import { mobile, tablet } from "../../responsive";

function About() {
  return (
    <section id="about">
      <h5>Lär Känna Mig</h5>
      <h2>Om Mig</h2>

      <Container>
        <MeContainer>
          <ImgContainer>
            <img src={ME} alt="ME" />
          </ImgContainer>
        </MeContainer>

        <AbountContent>
          <p>
            skrivanågotskrivanågotskrivanågotskrivanågotskrivan
            ågotskrivanågotskrivanågotskrivanågotskrivanågotskriv
            anågotskrivanågotskrivanågotskrivanågotskrivanågots
            krivanågotskrivanågotskrivanågotskrivanågotskrivanågots
            krivanågotskrivanågot
          </p>

          <a href="#contact" className="btn btn-primary">
            Kontakta Mig
          </a>
        </AbountContent>
      </Container>
    </section>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 12%;
  width: var(--container-width-lg);
  margin: 0 auto;
  ${tablet({ gridTemplateColumns: "1fr", gap: "0" })}
`;

const MeContainer = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(
    45deg,
    transparent,
    var(--color-primary),
    transparent
  );
  display: grid;
  place-items: center;

  ${mobile({ width: "35%", margin: "3rem auto 3rem" })}
  ${tablet({ width: "35%", margin: "3.7rem auto 5rem" })}
`;

const ImgContainer = styled.div`
  width: 100%;
  border-radius: 2rem;
  overflow: hidden;
  transform: rotate(10deg);
  transition: var(--transition);

  &:hover {
    transform: rotate(0deg);
  }
`;

const AbountContent = styled.p`
  margin: 2rem 0 2.6rem;
  color: var(--color-light);

  > a {
    margin-top: 1rem;
  }

  ${mobile({ textAlign: "center" })}
  ${tablet({ margin: "1rem 0 1,5rem", textAlign: "center" })}
`;

export default About;
