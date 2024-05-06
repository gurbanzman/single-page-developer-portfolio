import { useState } from "react";
import ContactLinks from "../ContactLinks";
import Line from "../Line";
import ContactInput from "./ContactInput";
import TitleName from "./TitleName";
import SendBtn from "../layout/SendBtn";
import PropTypes from 'prop-types';

import { showToastError, showToastSuccess } from "../helper/toastHelper";

function Footer({data}) {
  let [inputFullName, setInputFullName] = useState("");
  let [inputMessage, setInputMessage] = useState("");
  let [inputMail, setInputMail] = useState("");
  let [message, setMessage] = useState([]);
  // let [empty, setEmpty] = useState([]);
  let [success, setSuccess] = useState(false);

  function handleChangeName() {
    setInputFullName((inputFullName = event.target.value));
  }

  function handleChangeMail() {
    setInputMail((inputMail = event.target.value));
  }

  function handleChangeMessage() {
    setInputMessage((inputMessage = event.target.value));
  }
  // let [right, setRight] = useState();

  let messageLocale = localStorage.getItem("message");
  if (messageLocale) {
    try {
      message = JSON.parse(messageLocale);
    } catch (error) {
      console.error(error);
    }
  }

  // function handleChange() {
  //   console.log(event.target.value);
  // }

  function handleClick(e) {
    e.preventDefault();
    let unicaleId = Math.floor(Math.random() * 100);
    let filter = message.filter(
      (item) => item.mail.toLowerCase() === inputMail.toLowerCase()
    );
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputFullName === "" || inputMail === "" || inputMessage === "" ||regex.test(inputMail)) {
      setSuccess(false);
      showToastError("Please right written");
    } else {
      if (filter.length > 0) {
        showToastError("Please different written from email!");
      } else {
        setSuccess(true);
        showToastSuccess("Successful");
        message.push({
          id: unicaleId,
          name: inputFullName,
          mail: inputMail,
          messages: inputMessage,
        });
        localStorage.setItem("message", JSON.stringify(message));
      }
    }
  }

  return (
    <footer className="footer">
      <section className="footer-contact_section container">
        <div className="footer-contact_title">
          <h1 className="footer-title">Contact</h1>
          <p className="footer-subtitle">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <form className="footer-form">
          <div className={"footer-form_contact"}>
            <ContactInput
              type={`text`}
              name={`text`}
              placeholder={`Enter Name`}
              onChange={handleChangeName}
            />
            <ContactInput
              type={`email`}
              name={`text`}
              placeholder={`Enter Mail`}
              onChange={handleChangeMail}
            />
            <div className={"footer-form_single"}>
              <textarea
                name="messages"
                cols="30"
                rows="5"
                className="footer-contact_input"
                placeholder="Enter Messages"
                onChange={handleChangeMessage}
                required
              ></textarea>
            </div>
          </div>
          <div className="footer-form_btn">
            <SendBtn
              type="submit"
              value="SEND MESSAGE"
              onClick={(e) => handleClick(e)}
              success={success}
            />
          </div>
        </form>
      </section>
      <section className="footer-line container">
        <Line />
      </section>
      <section className="footer-contact_user">
        <div className="footer-user container">
          <TitleName data={data}/>
          <ContactLinks />
        </div>
      </section>
    </footer>
  );
}
Footer.propTypes={
  data:PropTypes.object
}

export default Footer;
