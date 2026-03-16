import {
    AboutSection,
    AboutContainer,
    AboutHeading,
    AboutText
  } from "./About.styles";
  
  const About = () => {
    return (
      <AboutSection id="about">
        <AboutContainer>
          <AboutHeading>About JMC Communications</AboutHeading>
          <AboutText>
            JMC Communications is dedicated to building strong brands and meaningful
            connections. With expertise in media strategy, branding, and public
            relations, we help businesses communicate their vision effectively
            and achieve lasting impact. Our team combines creativity and strategic
            thinking to deliver results that matter.
          </AboutText>
        </AboutContainer>
      </AboutSection>
    );
  };
  
  export default About;
  