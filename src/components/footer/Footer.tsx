import {
    FooterSection,
    FooterContainer,
    FooterText,
    SocialLinks,
    SocialLink
  } from "./Footer.styles";
  
  const Footer = () => {
    return (
      <FooterSection>
        <FooterContainer>
          <FooterText>© {new Date().getFullYear()} JMC Communications. All Rights Reserved.</FooterText>
          <SocialLinks>
            <SocialLink href="https://www.instagram.com/ms.khumo" target="_blank">Instagram</SocialLink>
            <SocialLink href="https://www.tiktok.com/@khumo.mogotlhe" target="_blank">TikTok</SocialLink>
          </SocialLinks>
        </FooterContainer>
      </FooterSection>
    );
  };
  
  export default Footer;
  