import styled from "styled-components";

export const FooterSection = styled.footer`
  padding: 3rem 0;
  background-color: #0a192f;
  color: white;
`;

export const FooterContainer = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialLink = styled.a`
  color: #4da6ff;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #1d3557;
  }
`;
