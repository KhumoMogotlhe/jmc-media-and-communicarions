import styled from "styled-components";

export const HeroSection = styled.section`
  min-height: 100vh;
  padding-top: 120px; 
  display: flex;
  align-items: center;

  background: linear-gradient(
    180deg,
    #f8fbff 0%,
    #eef5ff 100%
  );
`;

export const HeroContainer = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: auto;
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  color: #0a192f;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const SubText = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 2.5rem auto;
  color: #4a5568;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CTAButton = styled.a`
  display: inline-block;
  padding: 0.9rem 2rem;
  background-color: #0a192f;
  color: white;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1d3557;
    transform: translateY(-3px);
  }
`;
