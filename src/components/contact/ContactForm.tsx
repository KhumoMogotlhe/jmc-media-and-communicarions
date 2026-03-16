import { useRef } from "react";
import emailjs from "emailjs-com";
import { ContactForm as StyledForm, Input, TextArea, SubmitButton } from "./Contact.styles";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_ebifly6",
        "template_wq0ihyc",
        formRef.current,
        "5I8i44PnHlMgaXQl2"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <StyledForm ref={formRef} onSubmit={sendEmail}>
      <Input type="text" name="name" placeholder="Your Name" required />
      <Input type="email" name="time" placeholder="Your Email" required />
      <TextArea name="message" placeholder="Your Message" required />
      <SubmitButton type="submit">Send Message</SubmitButton>
    </StyledForm>
  );
};

export default ContactForm;