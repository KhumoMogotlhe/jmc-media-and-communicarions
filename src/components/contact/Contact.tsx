// import {
//     ContactSection,
//     ContactContainer,
//     ContactHeading,
//     ContactForm,
//     Input,
//     TextArea,
//     SubmitButton
//   } from "./Contact.styles";
  
// //   const Contact = () => {
// //     return (
// //       <ContactSection id="contact">
// //         <ContactContainer>
// //           <ContactHeading>Contact Us</ContactHeading>
  
// //           <ContactForm>
// //             <Input type="text" placeholder="Your Name" required />
// //             <Input type="email" placeholder="Your Email" required />
// //             <TextArea placeholder="Your Message" required />
// //             <SubmitButton type="submit">Send Message</SubmitButton>
// //           </ContactForm>
// //         </ContactContainer>
// //       </ContactSection>
// //     );
// //   };
  
// //   export default Contact;
  
// import { useRef } from "react";
// import emailjs from "emailjs-com";

// const Contact = () => {
//   const formRef = useRef<HTMLFormElement>(null);

//   const sendEmail = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formRef.current) return;

//     emailjs
//       .sendForm(
//         "YOUR_SERVICE_ID",
//         "YOUR_TEMPLATE_ID",
//         formRef.current,
//         "YOUR_PUBLIC_KEY"
//       )
//       .then(
//         (result) => {
//           alert("Message sent successfully!");
//         },
//         (error) => {
//           alert("Error sending message. Please try again.");
//         }
//       );
//   };

//   return (
//     <ContactSection id="contact">
//       <ContactContainer>
//         <ContactHeading>Contact Us</ContactHeading>

//         <ContactForm ref={formRef} onSubmit={sendEmail}>
//           <Input type="text" name="name" placeholder="Your Name" required />
//           <Input type="email" name="email" placeholder="Your Email" required />
//           <TextArea name="message" placeholder="Your Message" required />
//           <SubmitButton type="submit">Send Message</SubmitButton>
//         </ContactForm>
//       </ContactContainer>
//     </ContactSection>
//   );
// };

// export default Contact;


import ContactForm from "./ContactForm";
import { ContactSection, ContactContainer, ContactHeading } from "./Contact.styles";

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactHeading>Contact Us</ContactHeading>
        <ContactForm />
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
