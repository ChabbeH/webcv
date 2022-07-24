import React from "react";
import styled from "styled-components";
import CV from "../../assets/cv.pdf";

function Cv() {
  return (
    <CvContainer>
      <a href={CV} download className="btn">
        Ladda Ner CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Kontakt Mig
      </a>
    </CvContainer>
  );
}

const CvContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 1.2rem;
  justify-content: center;
`;

export default Cv;
