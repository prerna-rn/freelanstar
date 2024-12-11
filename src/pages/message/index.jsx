import { useState } from "react";
import { Link } from "react-router-dom";
import "./Message.scss";

const Message = () => {
  const [messages, setMessages] = useState([
    {
      owner: true,
      img: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      text:
        "Hi there! I’ve been working on the AI chatbot lately. The deployment process can be challenging, especially when trying to integrate it into various platforms.",
    },
    {
      owner: false,
      img: "https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600",
      text: "That sounds interesting! What kind of deployment challenges have you encountered so far?",
    },
  {
    owner: true,
    img: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    text:
      "One major challenge has been ensuring the chatbot works seamlessly across different platforms, like web, mobile, and even voice assistants. Each has its own set of requirements for APIs and interaction patterns.",
  },
  {
    owner: false,
    img: "https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600",
    text: "I can see how that would be tricky! How are you managing the deployment pipelines? Are you using Docker or a cloud service?",
  },
  {
    owner: true,
    img: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    text:
      "I’m using Docker containers for deployment. It allows me to encapsulate the chatbot’s environment and dependencies, making it easier to manage across different platforms. I’m also considering cloud services like AWS for scalability.",
  },
  {
    owner: false,
    img: "https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600",
    text: "That sounds like a robust solution! Are you also handling real-time updates for the chatbot?",
  },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() === "") return;

    const newMsgObject = {
      owner: true,
      img: "https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600",
      text: newMessage,
    };

    setMessages([...messages, newMsgObject]);
    setNewMessage("");
  };

  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">Messages</Link> {">"} Prerna {">"}
        </span>
        <div className="messages">
          {messages.map((msg, index) => (
            <div
              className={`item ${msg.owner ? "owner" : ""}`}
              key={index}
            >
              <img src={msg.img} alt="" />
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
        <hr />
        <div className="write">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Write a message"
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
