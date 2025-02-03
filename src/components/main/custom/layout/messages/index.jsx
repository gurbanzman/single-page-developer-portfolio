import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllMessages } from "../../../../../hooks/data";

function CustomMessages() {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await getAllMessages(id);
      setMessages(data);
    };

    fetchMessages();
  }, [id]);

  return (
    <ul className="messages-list">
      {messages?.map((item) => {
        return (
          <li key={item._id} className="messages-list-item">
            <div className="messages-list-item-content">
              <h2 className="messages-list-item-head">
                <span className="message--title">Person</span>:{" "}
                <span className="message-section-text">{item.from}</span>
              </h2>
              <p className="messages-list-item-body">
                <span className="message--title">Email</span>:{" "}
                <span className="message-section-text">{item.email}</span>
              </p>
              <div className="messages-list-item-footer">
                <p className="messages-texts">
                  <span className="message--title">Message</span>:{" "}
                  <span className="message-section-text">{item.messages}</span>
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default CustomMessages;
