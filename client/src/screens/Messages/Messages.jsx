import { useState, useEffect } from "react";
import { getAllMessages, deleteMessage } from "../../services/contacts";
import "./Messages.css";

export default function Messages({ user }) {
  const [message, setMessage] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      const allMessages = await getAllMessages();
      setMessage(allMessages);
    };
    fetchMessages();
  }, [toggleFetch]);

  const handleDelete = async (id) => {
    await deleteMessage(id);
    setToggleFetch(!toggleFetch);
  };

  const loggedIn = (
    <div className="contacts">
      <h1 className="contact-title">Messages</h1>
      {message.map((message) => (
        <div className="contact-card" key={message.id}>
          <h1>From: {message.email}</h1>
          <p>{message.message}</p>
          <button onClick={() => handleDelete(message.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
  return <>{user ? loggedIn : null}</>;
}
