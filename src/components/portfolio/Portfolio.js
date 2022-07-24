import React from "react";
import styled from "styled-components";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import { mobile, tablet } from "../../responsive";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Astilt E-shop",
    github: "https://github.com/ChabbeH/Astilt",
  },
  {
    id: 2,
    image: IMG2,
    title: "Astilt E-shop APP",
    github: "https://github.com/ChabbeH/Examensarbete",
  },
  {
    id: 3,
    image: IMG3,
    title: "APM APP",
    github: "https://github.com/Mattan1999/APM",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>Mina Senaste Arbeten</h5>
      <h2>Portfolio</h2>

      <PortfolioContainer>
        {data.map(({ id, image, title, github }) => {
          return (
            <PortfolioItem key={id}>
              <PortfolioImg>
                <img src={image} alt={title} width="100%" height="100%" />
              </PortfolioImg>
              <PorfolioTitle>{title}</PorfolioTitle>

              <PortfolioIcons>
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </PortfolioIcons>
            </PortfolioItem>
          );
        })}
      </PortfolioContainer>
    </section>
  );
}

const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  width: var(--container-width-lg);
  margin: 0 auto;
  margin-top: 1rem;
  ${mobile({ gridTemplateColumns: "1fr", gap: "1rem" })}
  ${tablet({ gridTemplateColumns: "1fr 1fr", gap: "1.2rem" })}
`;

const PortfolioItem = styled.article`
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover {
    background-color: var(--color-bg-variant);
    background: transparent;
  }
`;

const PortfolioImg = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
`;

const PorfolioTitle = styled.h3`
  margin: 1.2rem 0 2rem;
`;

const PortfolioIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export default Portfolio;
