import styled from "styled-components";

export const AboutSection = styled.section`
  padding: 6rem 0;
  background-color: #eef5ff;
`;

export const AboutContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: auto;
  text-align: center;
`;

export const AboutHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #0a192f;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const AboutText = styled.p`
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
