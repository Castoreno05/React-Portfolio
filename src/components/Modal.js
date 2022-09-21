import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ReactDom from "react-dom";
import emailjs from "@emailjs/browser";
import { ImCross } from "react-icons/im";
import "./ContactForm/contact.css";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  animation: "fadeIn 1s",
  zIndex: 1000,
};
const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  animation: "fadeIn 1s",
  backgroundColor: "rgba(0, 0, 0, .8)",
  zIndex: 1000,
};

export default function Modal({ open, children, onClose }) {
  const [to_name, setTo_name] = useState("");
  const [from_name, setFrom_name] = useState("");
  const [message, setMessage] = useState("");
  const inputs = document.querySelectorAll("input");
  const textField = document.querySelectorAll("textarea");
  if (!open) return null;

  const submitInfo = (e) => {
    e.preventDefault();

    textField.forEach((textarea) => (textarea.value = ""));
    inputs.forEach((input) => (input.value = ""));

    console.log(to_name + from_name + message);

    var emailContent = {
      to_name: to_name,
      from_name: from_name,
      message: message,
    };

    emailjs
      .send(
        "service_jw4ta39",
        "template_p2hook7",
        emailContent,
        "0f5Bq6CLKVad2P7ep"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <form className="contactForm">
          <div className="contactContainer">
            <div id="contact" action="" method="post">
              <div className="contactHeader">
                <h3>Contact Me</h3>
                <Button variant="dark" onClick={onClose}><ImCross/></Button>
              </div>
              <br></br>
              <input
                placeholder="Your name"
                type="text"
                tabIndex="1"
                required
                onChange={(event) => {
                  setTo_name(event.target.value);
                }}
              />
              <input
                placeholder="Your Email Address"
                type="email"
                tabIndex="2"
                required
                onChange={(event) => {
                  setFrom_name(event.target.value);
                }}
              />
              <textarea
                placeholder="Type your message here...."
                tabIndex="3"
                required
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              ></textarea>
              <button name="submit" type="submit" onClick={submitInfo}>
                Submit
              </button>
              <p className="copyright">
                Github Username{" "}
                <a
                  href="https://github.com/Castoreno05"
                  target="_blank"
                  title="Github"
                >
                  Castoreno05
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
}
