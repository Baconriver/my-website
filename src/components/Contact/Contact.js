import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../assets/constants";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact me</h2>
      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail}>
          <div className="contact-name">
            <label for="contact-name">Name: </label>
            <input id="contact-name" type="text" name="name"></input>
          </div>
          <div className="contact-mobile">
            <label for="contact-mobile">Mobile: </label>
            <input id="contact-mobile" type="number" name="mobile"></input>
          </div>
          <div className="contact-email">
            <label for="contact-email">Email: </label>
            <input id="contact-email" type="email" name="email"></input>
          </div>
          <div className="contact-content">
            <label for="contact-content">Message: </label>
            <textarea
              id="contact-content"
              name="message"
              maxLength={2000}
              placeholder="Something here..."
            ></textarea>
          </div>
          <input type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
