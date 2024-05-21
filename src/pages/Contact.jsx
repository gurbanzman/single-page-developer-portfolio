import { useState } from "react";
import ContactBtn from "../layout/ContactBtn";
import SendBtn from "../layout/SendBtn";

export default function Contact() {
  let [empty, setEmpty] = useState(false);
  let find = localStorage.getItem("message");
  if (find) {
    try {
      find = JSON.parse(find);
      find.length>0? find: find=[];
    } catch (error) {
      console.error(error);
    }
  }
  const refreshData = () => {
    find = [];
    localStorage.setItem("message",JSON.stringify(find))
    setEmpty(true);
  };
  return (
    <main className="contact-main">
      <section className="contact-section container">
        <div className="contact-section_head">
          <h1 className="contact-section_title">Contact with me</h1>
          <ContactBtn type={`button`} link={`/`} value={`Go Home Page`} />
        </div>
        <div className="contact-section_messages">
          {find == null
            ? <p className="found-messages">Not Found Messages</p>
            : find.map((item, index) => {
                let { name,mail, messages } = item;
                return find == null ? (
                  ""
                ) : (
                  <div key={index} className="contact-messages">
                    <div className="contact-messages_title">
                      <h1 className="contact-messages_text">
                        <span className="contact-messages_name">
                          {name ? name : "Adama Keys"}
                        </span>{" "}
                        says that ...
                      </h1>
                      <span className="icon-android"></span>
                    </div>
                    <div className="contact-messages_subtitle">
                      <p className="contact-messages_describe">
                        {messages
                          ? messages
                          : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                      </p>
                    </div>
                  </div>
                );
              })}
        </div>
        <div className="contact-messages_btn">
          <SendBtn
            type={`button`}
            value={`Refresh Messages`}
            onClick={refreshData}
            success={empty}
          />
        </div>
      </section>
    </main>
  );
}
