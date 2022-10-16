import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../assets/constants";
import { Form, Button, Ref } from "semantic-ui-react";

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
      {/* <div className="contact-container">
        <form ref={form} onSubmit={sendEmail}>
          <div className="contact-name">
            <label for="contact-name">Name: </label>
            <input id="contact-name" type="text" name="name" />
          </div>
          <div className="contact-mobile">
            <label for="contact-mobile">Mobile: </label>
            <input id="contact-mobile" type="number" name="mobile" />
          </div>
          <div className="contact-email">
            <label for="contact-email">Email: </label>
            <input id="contact-email" type="email" name="email" />
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
      </div> */}
      <Ref innerRef={form}>
        <Form onSubmit={sendEmail}>
          <Form.Field>
            <label for="contact-name">Name</label>
            <input
              placeholder="Name"
              id="contact-name"
              type="text"
              name="name"
            />
          </Form.Field>
          <Form.Field>
            <label for="contact-mobile">Mobile</label>
            <input
              placeholder="Mobile"
              id="contact-mobile"
              type="text"
              name="mobile"
            />
          </Form.Field>
          <Form.Field>
            <label for="contact-email">Email</label>
            <input
              placeholder="Email"
              id="contact-email"
              type="email"
              name="email"
            />
          </Form.Field>
          <Form.Field>
            <label for="contact-content">Message</label>
            <textarea
              id="contact-content"
              name="message"
              maxLength={2000}
              placeholder="Message"
            ></textarea>
          </Form.Field>
          <Button type="submit">Send</Button>
        </Form>
      </Ref>
    </section>
  );
};

export default Contact;
