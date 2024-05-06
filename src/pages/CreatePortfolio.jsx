import ContactInput from "../components/ContactInput";
import { useState } from "react";
import ContactBtn from "../layout/ContactBtn";
import SendBtn from "../layout/SendBtn";
import { showToastError, showToastSuccess } from "../helper/toastHelper";
import CreateExperienceList from "./CreateExperienceList";

export default function CreatePortfolio() {
  let [finish, setFinish] = useState(true);
  let unicaleId = Math.floor(Math.random() * 100);
  let [right, setRight] = useState(false);
  let [experiences, setExperiences] = useState([
    {
      value: "HTML",
      check: false,
      text: "",
    },
    {
      value: "CSS",
      check: false,
      text: "",
    },
    {
      value: "JavaScript",
      check: false,
      text: "",
    },
    {
      value: "Sass",
      check: false,
      text: "",
    },
    {
      value: "React",
      check: false,
      text: "",
    },
    {
      value: "Accessibility",
      check: false,
      text: "",
    },
  ]);
  let [data, setData] = useState({
    id: unicaleId,
    name: "",
    info: "",
    userName: "",
    githubAcc: "",
    androidAcc: "",
    linkedinAcc: "",
    twitterAcc: "",
  });

  const handleExperienceChange = (index, event) => {
    const { name, value, checked } = event.target;
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [name]: name === "check" ? checked : value,
    };
    setExperiences(updatedExperiences);
  };

  function handleName() {
    setData((data) => ({
      ...data,
      name: event.target.value,
    }));
  }
  function handleInfo() {
    setData((data) => ({
      ...data,
      info: event.target.value,
    }));
  }
  function handleUserName() {
    setData((data) => ({
      ...data,
      userName: event.target.value,
    }));
  }
  function handleGit() {
    setData((data) => ({
      ...data,
      githubAcc: event.target.value,
    }));
  }
  function handleAndroid() {
    setData((data) => ({
      ...data,
      androidAcc: event.target.value,
    }));
  }

  function handleLinkEdin() {
    setData((data) => ({
      ...data,
      linkedinAcc: event.target.value,
    }));
  }

  function handleTwitter() {
    setData((data) => ({
      ...data,
      twitterAcc: event.target.value,
    }));
  } 

  function handleClick(e) {
    e.preventDefault();
    if (
      data.name === "" ||
      data.info === "" ||
      data.userName === "" ||
      data.githubAcc === "" ||
      data.linkedinAcc === "" ||
      data.androidAcc === "" || experiences==[]
    ) {
      showToastError("Please write all inputs");
    } else {
      setRight(true);
      const port = {
        name: data.name,
        info: data.info,
        userName: data.userName,
        githubAcc: data.githubAcc,
        linkedinAcc: data.linkedinAcc,
        twitterAcc: data.twitterAcc,
        androidAcc: data.androidAcc,
        exp: experiences.length>0?experiences:[]
      };
      showToastSuccess("You are Best");
      fetch("http://localhost:3000/users_portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(port),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Başarılı:", data);
        })
        .catch((error) => {
          console.error("Hata:", error);
        });
    }
  }

  return (
    <div className="create-portfolio content">
      <form className="create-portfolio_sec">
        <ContactInput
          type={`text`}
          name={`text`}
          placeholder={`Your Name`}
          onChange={handleName}
        />
        <ContactInput
          type={`text`}
          name={`text`}
          placeholder={`Your About`}
          onChange={handleInfo}
        />
        <ContactInput
          type={`text`}
          name={`text`}
          placeholder={`Your UserName`}
          onChange={handleUserName}
        />
        <ContactInput
          type={`text`}
          name={`text`}
          placeholder={`Your Github URL`}
          onChange={handleGit}
        />
        <ContactInput
          type={`text`}
          name={`text`}
          placeholder={`Your Android URL`}
          onChange={handleAndroid}
        />
        <ContactInput
          type={`text`}
          name={`text`}
          placeholder={`Your Linkedin URL`}
          onChange={handleLinkEdin}
        />
        <ContactInput
          type={`text`}
          name={`text`}
          placeholder={`Your Twitter URL`}
          onChange={handleTwitter}
        />
        <ul className="create-port_exp">
          {experiences.map((item,index)=> {
            let {value}=item;
            return <CreateExperienceList key={index} value={value} arr={finish} func={(event) => handleExperienceChange(index,event)}/>
          })}
        </ul>
        <div>
          {right ? (
            <ContactBtn type={`button`} link={`/`} value={`Create`} />
          ) : (
            <SendBtn
              type={`submit`}
              value={`Next`}
              onClick={(e) => handleClick(e)}
              success={right}
            />
          )}
        </div>
      </form>
    </div>
  );
}
