import { Link } from "react-router-dom";
import "./Messages.scss";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "prerna",
    isSeller: true,
  };

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>Arjun Patel</td>
            <td>
              <Link to="/message/123" className="link">
                &quot;Hey, I loved the website you developed. Can you make some changes?&quot;
              </Link>
            </td>
            <td>1 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>Sneha Sharma</td>
            <td>
              <Link to="/message/123" className="link">
                &quot;The AI chatbot is working great! But I need help with the deployment.&quot;
              </Link>
            </td>
            <td>2 hours ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>Ravi Kumar</td>
            <td>
              <Link to="/message/123" className="link">
                &quot;Could you explain the details of your web scraping project to me?&quot;
              </Link>
            </td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>Priya Verma</td>
            <td>
              <Link to="/message/123" className="link">
                &quot;I have a few questions about the Python tool you built for data analysis.&quot;
              </Link>
            </td>
            <td>2 days ago</td>
          </tr>
          <tr>
            <td>Vikram Singh</td>
            <td>
              &quot;I need some assistance with integrating the AI model into my application.&quot;
            </td>
            <td>1 week ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
