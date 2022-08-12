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
            Hej! Jag är Junior Frontendutvecklare med en vilja att utvecklas.
            Som person beskrivs jag som målmedveten, nyfiken och ansvarstagande.
            Har lätt för att samarbeta med andra människor, är alltid engagerad
            och organiserad i mitt arbete. Jag är ambitiös och väldigt noggrann.
            Under min studietid som Applikationsutvecklare så var det främst ett
            område som fångade mitt intresse och det är Webbapplikationer,
            framför allt ramverket REACT. Det är ett spännande område och jag är
            ivrig på att fortsätta utvecklas och växa. Under mina studier fick
            jag även möjligheten att arbeta med ett MERN stack projekt, vilket
            var givande eftersom det täcker både front- och backend. Har
            tidigare drivit eget i servicebranschen och därav vet jag vad som
            krävs och förväntas av mig för att kunden ska vara nöjd. Under alla
            mina år har jag ofta fått höra både av kunder och patienter att det
            känt sig nöjda och tillfreds med servicen. Mina karaktärsdrag och
            yrkesmässiga erfarenheter kommer vara en tillgång för er. Mina
            erfarenheter av att arbeta på olika nivåer har utvecklat min förmåga
            att vara lösningsorienterad. Jag hoppas att jag har väckt ert
            intresse och får en chans att komma och presentera mig närmare.
          </p>
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
  ${mobile({ gridTemplateColumns: "1fr", gap: "0" })}
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
  ${tablet({ width: "35%", margin: "3.7rem auto 5rem" })}
  ${mobile({ width: "35%", margin: "2.5rem auto 2rem" })}
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
  font-size: 18px;

  > a {
    margin-top: 1rem;
  }

  ${mobile({ fontSize: "14px" })}
  ${tablet({ margin: "1rem 0 1,5rem" })}
`;

export default About;
