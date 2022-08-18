import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

function Experience() {
  return (
    <section id="experience">
      <h2>Mina Kunskaper</h2>

      <ExpContainer>
        <ExpFrontend>
          <h3 color="white">Frontend Utveckling</h3>
          <ExpContent>
            <ExpDetail>
              <BsPatchCheckFill style={{ marginTop: "6px", color: "white" }} />
              <div>
                <h4>HTML</h4>
              </div>
            </ExpDetail>
            <ExpDetail>
              <BsPatchCheckFill style={{ marginTop: "6px", color: "white" }} />
              <div>
                <h4>CSS</h4>
              </div>
            </ExpDetail>
            <ExpDetail>
              <BsPatchCheckFill style={{ marginTop: "6px", color: "white" }} />
              <div>
                <h4>JavaScript</h4>
              </div>
            </ExpDetail>
            <ExpDetail>
              <BsPatchCheckFill style={{ marginTop: "6px", color: "white" }} />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </ExpDetail>
            <ExpDetail>
              <BsPatchCheckFill style={{ marginTop: "6px", color: "white" }} />
              <div>
                <h4>React</h4>
              </div>
            </ExpDetail>
          </ExpContent>
        </ExpFrontend>
        <ExpBackend>
          <h3>Backend Utveckling</h3>
          <ExpContent>
            <ExpDetail>
              <BsPatchCheckFill style={{ marginTop: "6px", color: "white" }} />
              <div>
                <h4>Node JS</h4>
              </div>
            </ExpDetail>
            <ExpDetail>
              <BsPatchCheckFill style={{ marginTop: "6px", color: "white" }} />
              <div>
                <h4>MongoDB</h4>
              </div>
            </ExpDetail>
          </ExpContent>
        </ExpBackend>
      </ExpContainer>
    </section>
  );
}

const ExpContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 1rem;
  width: var(--container-width-lg);
  margin: 0 auto;
  margin-top: 1rem;
  ${mobile({ gap: "1rem", gridTemplateColumns: "1fr" })}
  ${tablet({ gridTemplateColumns: "1fr" })}

  > div {
    background: var(--color-bg-variant);
    padding: 2.4rem 5rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: var(--transition);
    ${mobile({ width: "100%", padding: "2rem 1rem" })}
    ${tablet({ width: "80%", padding: "2rem", margin: "0 auto" })}
  }

  > div:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }

  > div h3 {
    text-align: center;
    margin-bottom: 2rem;
    color: #dcdcdc;
  }
`;

const ExpContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  ${mobile({ padding: "1rem" })}
`;

const ExpDetail = styled.article`
  display: flex;
  gap: 1rem;
`;

const ExpFrontend = styled.div`
  background: var(--color-bg-variant);
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);
`;
const ExpBackend = styled.div`
  background: var(--color-bg-variant);
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);
`;

export default Experience;
