import styled from "styled-components";

export const ContactSection = styled.section`
  padding: 6rem 0;
  background-color: #ffffff;
`;

export const ContactContainer = styled.div`
  width: 90%;
  max-width: 700px;
  margin: auto;
  text-align: center;
`;

export const ContactHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #0a192f;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Input = styled.input`
  padding: 0.9rem 1rem;
  border-radius: 8px;
  border: 1px solid #cbd5e0;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  padding: 0.9rem 1rem;
  border-radius: 8px;
  border: 1px solid #cbd5e0;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  padding: 0.9rem 2rem;
  background-color: #0a192f;
  color: white;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1d3557;
    transform: translateY(-2px);
  }
`;
