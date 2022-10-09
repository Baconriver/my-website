import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact me</h2>
      <div className="contact-container">
        <form>
          <div className="contact-name">
            <label for="contact-name">Name: </label>
            <input id="contact-name" type="text"></input>
          </div>
          <div className="contact-mobile">
            <label for="contact-mobile">Mobile: </label>
            <input id="contact-mobile" type="number"></input>
          </div>
          <div className="contact-email">
            <label for="contact-email">Email: </label>
            <input id="contact-email" type="email"></input>
          </div>
          <div className="contact-content">
            <label for="contact-content">Message: </label>
            <textarea
              id="contact-content"
              maxLength={500}
              placeholder="Something here..."
            ></textarea>
          </div>
          <input type={"submit"} value="submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
