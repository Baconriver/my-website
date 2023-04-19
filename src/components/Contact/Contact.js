import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../assets/constants";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

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
        toast.success("Email has been sent! Talk to you soon!😀");
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
        <div className="contact-first-row">
          <div className="contact-name">
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Name"
              className={errors?.name ? "invalid" : ""}
              {...register("name", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z ]+$/i,
              })}
            />
            {errors?.name?.type === "required" && (
              <p className="error-message">Please enter your name</p>
            )}
            {errors?.name?.type === "maxLength" && (
              <p className="error-message">Name cannot exceed 20 characters</p>
            )}
            {errors?.name?.type === "pattern" && (
              <p className="error-message">Alphabetical characters only</p>
            )}
          </div>
          <div className="contact-mobile">
            <input
              placeholder="Mobile"
              id="contact-mobile"
              type="text"
              name="mobile"
              className={errors?.mobile ? "invalid" : ""}
              {...register("mobile", {
                pattern: /^[0-9]+$/i,
              })}
            />
            {errors?.mobile?.type === "pattern" && (
              <p className="error-message">Numberic only </p>
            )}
          </div>
        </div>

        <input
          placeholder="Email"
          id="contact-email"
          type="email"
          name="email"
          className={errors?.email ? "invalid" : ""}
          {...register("email", {
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          })}
        />
        {errors?.email?.type === "required" && (
          <p className="error-message">Please enter your email</p>
        )}
        {errors?.email?.type === "pattern" && (
          <p className="error-message">Wrong Email pattern</p>
        )}
        <textarea
          id="contact-content"
          name="message"
          placeholder="Something to say..."
          className={errors?.message ? "invalid" : ""}
          {...register("message", {
            required: true,
            maxLength: 2000,
          })}
        />
        {errors?.message?.type === "required" && (
          <p className="error-message">Please enter your message</p>
        )}
        {errors?.message?.type === "maxLength" && (
          <p className="error-message">Message is too long</p>
        )}
        <motion.button
          initial={{ opacity: 0.6 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          whileInView={{ opacity: 1 }}
          className="contact-submit"
          type="submit"
        >
          Send
        </motion.button>
        {/* <button className="contact-submit" type="submit">
          Send
        </button> */}
        <ToastContainer position="top-right" closeOnClick theme="colored" />
      </form>
    </section>
  );
};

export default Contact;
