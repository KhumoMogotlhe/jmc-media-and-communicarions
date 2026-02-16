import { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
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
    <form ref={formRef} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
