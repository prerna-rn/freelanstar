import { Link } from "react-router-dom";
import "./Message.scss";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">Messages</Link> {">"} Prerna {">"}
        </span>
        <div className="messages">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Hi there! I’ve been working on an AI chatbot lately. The deployment
              process can be challenging, especially when trying to integrate it
              into various platforms.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              That sounds interesting! What kind of deployment challenges have
              you encountered so far?
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              One major challenge has been ensuring the chatbot works seamlessly
              across different platforms, like web, mobile, and even voice
              assistants. Each has its own set of requirements for APIs and
              interaction patterns.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              I can see how that would be tricky! How are you managing the
              deployment pipelines? Are you using Docker or a cloud service?
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              I’m using Docker containers for deployment. It allows me to
              encapsulate the chatbot’s environment and dependencies, making it
              easier to manage across different platforms. I’m also considering
              cloud services like AWS for scalability.
            </p>
          </div>
          <div className="item ">
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              AWS is a great choice, especially with its machine learning
              services. Are you incorporating any pre-trained models for natural
              language processing, or are you training your own models?
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              I’m using a mix of pre-trained models for NLP tasks, like GPT-3 and
              BERT, for text generation and understanding. However, I’m fine-tuning
              them with custom datasets specific to the domain the chatbot will
              operate in.
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              That sounds like a solid approach! How are you handling user
              authentication and security, especially with sensitive data in
              chatbot interactions?
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              I’m using OAuth for secure user authentication, which integrates
              well with most platforms. For sensitive data, I’m implementing end-to-end
              encryption and ensuring compliance with privacy regulations like GDPR.
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              It’s great to hear you’re focusing on security and privacy. As AI
              technology grows, ensuring safe and ethical use is crucial. Keep up
              the good work!
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Thanks! I’m excited to see where AI in chatbot development will go
              next, especially with improvements in context awareness and
              conversation depth.
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea type="text" placeholder="Write a message" />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
