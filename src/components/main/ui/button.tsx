import React from "react";
import { Link } from "react-router-dom";

function LinkOrBtn({ variant, link, linkText, type, btnText,handleClick }: any) {
  return variant === "link" ? (
    <Link to={link} className="main-user-link block">
      {linkText}
    </Link>
  ) : variant === "btn" ? (
    <button type={type} onClick={handleClick} className="main-user-link block">
      {btnText}
    </button>
  ) : (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="main-user-link block"
    >
      {linkText}
    </a>
  );
}

export default LinkOrBtn;
