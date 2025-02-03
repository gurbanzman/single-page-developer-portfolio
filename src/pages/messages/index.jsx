import CustomMessages from "../../components/main/custom/layout/messages";

function MessagesPage() {
  return (
    <div className="message-page">
      <div className="message-page-container">
        <div className="message-page-header">
          <h1 className="message-page-header-title">Messages</h1>
        </div>
        <div className="message-page-content">
          <CustomMessages />
        </div>
      </div>
    </div>
  );
}

export default MessagesPage;
