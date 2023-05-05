import React from "react";
import "../assets/inputMail.css";

export default function InputMail() {
  return (
    <>
      <label className="ctn-mail">
        Email
        <input className="email" type="email" />
      </label>
    </>
  );
}
