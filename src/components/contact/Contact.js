import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_xh429g4",
      "template_2fwptff",
      form.current,
      "jog4lmxmtv_A56j0m"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Hör av er</h5>
      <h2>Kontakta Mig</h2>

      <ContactContainer>
        <ContactOptCon>
          <ContactOptions>
            <MdOutlineEmail
              style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}
            />
            <h4>Email</h4>
            <h5>charbelhannon@hotmail.com</h5>
            <a
              href="mailto:någonmail@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Skicka Ett Meddelande
            </a>
          </ContactOptions>
          <ContactOptions>
            <RiMessengerLine
              style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}
            />
            <h4>Messenger</h4>
            <h5>Charbel Hannon</h5>
            <a
              href="https://m.me/charbel.hannon"
              target="_blank"
              rel="noreferrer"
            >
              Skicka Ett Meddelande
            </a>
          </ContactOptions>
          <ContactOptions>
            <BsWhatsapp
              style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}
            />
            <h4>Whatsapp</h4>
            <h5>+46760459596</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+46760459596"
              target="_blank"
              rel="noreferrer"
            >
              Skicka Ett Meddelande
            </a>
          </ContactOptions>
        </ContactOptCon>
        <Form ref={form} onSubmit={sendEmail}>
          <InputCon type="text" name="name" placeholder="Ditt Namn" required />
          <InputCon type="email" name="email" placeholder="Din Mail" required />
          <TextArea
            name="message"
            rows="7"
            placeholder="Ditt Meddelande"
            required
          ></TextArea>
          <button type="submit" className="btn btn-primary">
            Skicka Ett Meddelande
          </button>
        </Form>
      </ContactContainer>
    </section>
  );
};

const ContactContainer = styled.div`
  width: 58%;
  display: grid;
  grid-template-columns: 30% 58%;
  gap: 16%;
  width: 55%;
  margin: 0 auto;
  margin-top: 1rem;
  ${mobile({
    gridTemplateColumns: "1fr",
    gap: "2rem",
  })}
  ${tablet({ gridTemplateColumns: "1fr", gap: "2rem" })}
`;

const ContactOptCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const ContactOptions = styled.article`
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 1.2rem;
  text-align: center;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
  }

  > a {
    margin-top: 0.7rem;
    display: inline-block;
    font-size: 0.8rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const InputCon = styled.input`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 2px solid var(--color-primary-variant);
  resize: none;
  color: var(--color-white);
  ::placeholder {
    color: white;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 2px solid var(--color-primary-variant);
  resize: none;
  color: var(--color-white);
  ::placeholder {
    color: white;
  }
`;

export default Contact;
