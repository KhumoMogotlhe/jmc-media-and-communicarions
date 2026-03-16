import {
    ServicesSection,
    ServicesContainer,
    SectionHeading,
    CardsContainer,
    ServiceCard,
    CardTitle,
    CardText
  } from "./Services.styles";
  
  const servicesData = [
    {
      title: "Public Relations",
      description:
        "Crafting strategic messages to build and maintain your brand's reputation."
    },
    {
      title: "Branding",
      description:
        "Creating compelling identities and visual assets that resonate with your audience."
    },
    {
      title: "Marketing Strategy",
      description:
        "Designing campaigns that effectively reach and engage your target market."
    },
    {
      title: "Media & Communications",
      description:
        "Delivering media solutions and communications management for measurable impact."
    }
  ];
  
  const Services = () => {
    return (
      <ServicesSection id="services">
        <ServicesContainer>
          <SectionHeading>Our Services</SectionHeading>
          <CardsContainer>
            {servicesData.map((service, index) => (
              <ServiceCard key={index}>
                <CardTitle>{service.title}</CardTitle>
                <CardText>{service.description}</CardText>
              </ServiceCard>
            ))}
          </CardsContainer>
        </ServicesContainer>
      </ServicesSection>
    );
  };
  
  export default Services;
  