import { useState } from "react";
import { useHistory } from "react-router";
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
    <div id="contact">
      <h1>Contact Me</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => handleChange(e)}
          id="email"
          name="email"
          type="email"
          value={contact.email}
        />
        <label htmlFor="message">Your kind words...</label>
        <input
          onChange={(e) => handleChange(e)}
          id="message"
          name="message"
          type="text"
          value={contact.message}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
