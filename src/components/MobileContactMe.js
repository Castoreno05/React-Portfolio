import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

export const MobileContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPayload = {
      to_name: name,
      from_email: email,
      message: description,
    };

    if (name === "" || email === "" || description === "") {
      alert("All fields are required");
    } else {
      emailjs
        .send(
          "service_jw4ta39",
          "template_p2hook7",
          emailPayload,
          "0f5Bq6CLKVad2P7ep"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Email has been sent");
            setName("");
            setEmail("");
            setDescription("");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Container>
      <div className="body">
        <div className="info">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="info">
          <label htmlFor="email">Your Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="info">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className="footer">
        <div className="buttonDiv">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  .body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    padding-bottom: 0;
    .info {
      display: flex;
      flex-direction: column;
      gap: 3px;
      label {
        font-size: 16px;
      }
      input {
        padding: 0.25rem;
        border: none;
        border-radius: 5px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
      }
      textarea {
        border-radius: 5px;
        border: none;
        outline: none;
        height: 100px;
        resize: none;
        padding: 0.25rem;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
      }
    }
  }
  .footer {
    padding: 1rem;
    padding-top: 0;
    .buttonDiv {
      padding: 1rem 0;
      button {
        width: 100%;
        padding: 0.5rem;
        background: none;
        border-radius: 5px;
        cursor: pointer;
      }
      button:hover {
        background-color: black;
        color: white;
      }
    }
  }
`;
