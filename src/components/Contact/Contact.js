import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../assets/constants";
import { Form, Button, Ref, Message } from "semantic-ui-react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function sendEmail() {
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  return (
    <section className="contact" id="contact">
      <h2>Contact me</h2>
      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
        <input
          id="contact-name"
          type="text"
          name="name"
          placeholder="Name"
          {...register("name", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z ]+$/i,
          })}
        />
        {errors?.name?.type === "required" && <p>Please enter your name</p>}
        {errors?.name?.type === "maxLength" && (
          <p>Name cannot exceed 20 characters</p>
        )}
        {errors?.name?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <input
          placeholder="Mobile"
          id="contact-mobile"
          type="text"
          name="mobile"
          {...register("mobile", {
            pattern: /^[0-9]+$/i,
          })}
        />
        {errors?.mobile?.type === "pattern" && <p>Numberic only </p>}
        <input
          placeholder="Email"
          id="contact-email"
          type="email"
          name="email"
          {...register("email", {
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          })}
        />
        {errors?.email?.type === "required" && <p>Please enter your email</p>}
        {errors?.email?.type === "pattern" && <p>Wrong Email pattern</p>}
        <textarea
          id="contact-content"
          name="message"
          placeholder="Something to say..."
          {...register("message", {
            required: true,
            maxLength: 2000,
          })}
        />
        {errors?.name?.type === "required" && <p>Please enter your message</p>}
        {errors?.name?.type === "maxLength" && <p>Message is too long</p>}
        <input type="submit" />
      </form>
    </section>
  );
};

export default Contact;
