import React from "react";
import { useNavigate } from 'react-router-dom';
import { BaseContainer, Footer, FooterText, Logo, MainContent } from "./styles/HomePage.styles";

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <BaseContainer>
        <MainContent>
            <Logo
                src='src/assets/logo.jpg' alt='JMC Logo'
            />
        </MainContent>

        <Footer>
            <FooterText>&copy; 2024 Malefo Junior Media and Communications. All rights reserved.</FooterText>
        </Footer>
        </BaseContainer>
    )
}