import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import emailjs from "@emailjs/browser";

export const ContactMe = ({ setOpenModal }) => {
  const handleModal = (e) => {
    e.preventDefault();
    setOpenModal(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const description = document.getElementById("description").value;
    const emailPayload = {
      to_name: name,
      from_email: email,
      message: description,
    };

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
        },
        (error) => {
          console.log(error.text);
        }
      );
    setOpenModal(false);
  };

  return (
    <Container>
      <div className="header">
        <h1>Contact Me</h1>
        <AiFillCloseCircle onClick={handleModal} />
      </div>
      <div className="body">
        <div className="info">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" />
        </div>
        <div className="info">
          <label htmlFor="email">Your Email</label>
          <input type="text" id="email" />
        </div>
        <div className="info">
          <label htmlFor="description">Description</label>
          <textarea id="description" />
        </div>
      </div>
      <div className="footer">
        <div className="buttonDiv">
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className="githubDiv">
          <p>
            Github Username:{" "}
            <a href="https://github.com/Castoreno05" target="_blank">
              Castoreno05
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  //   height: 300px;
  position: relative;
  background-color: whitesmoke;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: top 0.2s ease-out, opacity 0.2s ease-out;
  border-radius: 8px;
  .header {
    position: relative;
    padding: 0.5rem;
    h1 {
      text-align: center;
    }
    svg {
      position: absolute;
      right: 0;
      top: 10px;
      left: 91%;
      font-size: 22px;
      cursor: pointer;
    }
  }
  .body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 300px;
    margin: 0 auto;
    .info {
      display: flex;
      flex-direction: column;
      gap: 3px;
      label {
        font-size: 18px;
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
    width: 300px;
    margin: 0 auto;
    .buttonDiv {
      padding: 1rem 0;
      button {
        width: 100%;
        padding: 0.75rem;
        background-color: green;
        border: none;
        color: white;
        border-radius: 5px;
        cursor: pointer;
      }
    }
    .githubDiv {
      padding-bottom: 1rem;
      p {
        text-align: center;
      }
    }
  }
`;
