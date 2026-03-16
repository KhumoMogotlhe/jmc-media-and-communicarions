import styled from "styled-components";

export const ServicesSection = styled.section`
  padding: 6rem 0;
  background-color: #ffffff;
`;

export const ServicesContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  text-align: center;
`;

export const SectionHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #0a192f;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export const ServiceCard = styled.div`
  background: #f4f8fb;
  padding: 2rem;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #0a192f;
`;

export const CardText = styled.p`
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.6;
`;
