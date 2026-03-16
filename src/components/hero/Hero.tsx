import {
    HeroSection,
    HeroContainer,
    Heading,
    SubText,
    CTAButton
  } from "./Hero.styles";
  import { sendJSONToNative } from "../hooks/useWebViewMessageListener";

  
  const Hero = () => {
    return (
      <HeroSection id="home">
        <HeroContainer>
          <Heading>
            Building Powerful Brands Through Strategic Communication
          </Heading>
  
          <SubText>
            At JMC Communications, we specialize in media strategy, branding,
            and public relations that position your business for lasting impact.
          </SubText>
  
          <CTAButton
            onClick={() =>
                sendJSONToNative({
                action: "explore_services",
                section: "services",
                timestamp: Date.now(),
                })
            }
            >
            Explore Our Services
         </CTAButton>
        </HeroContainer>
      </HeroSection>
    );
  };
  
  export default Hero;
  