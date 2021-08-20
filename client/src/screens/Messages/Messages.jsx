import { getAllMessages } from "../../services/contacts";
import { useState, useEffect } from "react";
import "./Messages.css";


export default function Messages({user}) {
  const [message, setMessage] = useState([])

  useEffect(()=> {
    const fetchMessages = async ()=> {
      const allMessages = await getAllMessages();
      setMessage(allMessages)
    }
    fetchMessages();
  }, []);

  const loggedIn = (
    <div className="contacts">
    <h1>Messages</h1>
    {message.map((message)=> (
      <div key={message.id}>
        <h1>From: {message.email}</h1>
        <p>{message.message}</p>
      </div>
    ))}
  </div>
  )
  return (
    <>
    {user ? loggedIn : null}
    </>
  )
}