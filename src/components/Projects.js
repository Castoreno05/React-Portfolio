import React, { useState } from "react";
import styled from "styled-components";
import { projectData } from "./Projects/projectData";

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <Container>
      <h1>Applications</h1>
      <div className="itemContainer">
        {projectData.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.title}</h2>
              <span>{selected === i ? "-" : "+"}</span>
            </div>
            <div className={selected === i ? "show" : "content"}>
              <a href={item.href} target={item.target}>
                {item.video}
              </a>
              <p>{item.description}</p>
              <a className="repository" href={item.repo} target={item.target}>
                Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: white;
  gap: 1rem;
  h1 {
    text-align: center;
    padding 2rem;
  }
  .itemContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    .item {
      width: 50%;
      .title {
        cursor: pointer;
        border-radius: 15px;
        padding: 0.6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #bcb8b1;
      }
      .title:hover {
        background-color: #ae8e1c;
      }
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        overflow: hidden;
        max-height: 0;
      }
      .show {
        box-shadow: 0px 15px 5px 0px rgba(0, 0, 0, 0.75);
        height: auto;
        max-height: 9999;
        a {
          img {
            padding: 15px;
            border-radius: 25px;
            height: 300px;
            width: 100%;
          }
        }
        p {
          padding: 1rem;
        }
        .repository {
          color: inherit;
          padding: 0.4rem;
          text-decoration: none;
          font-weight: 600;
          position: relative;
          left: 16px;
          bottom: 15px;
          background-color: #bcb8b1;
          border-radius: 3px;
        }
        .repository:hover {
          background-color: #ae8e1c;
        }
      }
    }
  }
`;
