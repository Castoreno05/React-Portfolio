import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

export default function Contact() {
  const [to_name, setTo_name] = useState("");
  const [from_name, setFrom_name] = useState("");
  const [message, setMessage] = useState("");

  const submitInfo = () => {
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

  return (
    <div className="contactForm">
      <div className="contactContainer">
        <div id="contact" action="" method="post">
          <h3>Contact me</h3>
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
    </div>
  );
}
