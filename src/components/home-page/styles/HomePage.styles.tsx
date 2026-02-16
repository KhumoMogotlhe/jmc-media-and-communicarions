import styled from 'styled-components';

export const BaseContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;
padding: 1rem;
margin: 0 auto;
overflow: hidden;
position: relative;
box-shadow;
`;

export const MainContent = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
padding: 2rem 0;
`;

export const Logo = styled.img`
width: 150px;
height: auto;
margin-bottom: 3rem;

@media (max-width: 768px) {
width: 120px;
}
`;

export const Footer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
padding-bottom: 2rem;
`;

export const FooterText = styled.span`
font-size: 0.9 rem;
color: rgb(150, 150, 150);
`;