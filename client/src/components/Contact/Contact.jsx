import { useState } from "react";
import { createMessage } from "../../services/contacts";
import "./Contact.css";

export default function Contact() {
  const [contact, setContact] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...setContact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.prevent.default();
    await createMessage(contact);
  };

  return (
    <div data-aos="fade-down" id="contact">
      <h1 id="contact-me">Contact Me</h1>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="label-input">
          <label className="labels" htmlFor="email">
            Email
          </label>
          <input
            onChange={(e) => handleChange(e)}
            id="email"
            name="email"
            type="email"
            value={contact.email}
            className="inputs"
          />
        </div>
        <div className="label-input">
          <label className="labels" htmlFor="message">
            Your kind words...
          </label>
          <textarea
            onChange={(e) => handleChange(e)}
            id="message"
            name="message"
            type="text"
            value={contact.message}
            className="inputs"
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
