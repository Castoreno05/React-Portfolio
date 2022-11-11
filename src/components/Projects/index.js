import React, { useState } from "react";
import styled from "styled-components";
import { projectData } from "./projectData";

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
      {projectData.map((item, i) => (
        <div className="item">
          <div className="title" onClick={() => toggle(i)}>
            <h2>{item.title}</h2>
            <span>{selected === i ? "-" : "+"}</span>
          </div>
          <div className={selected === i ? "show" : "content"}>
            <section>{item.video}</section>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.2rem;
  gap: 1rem;
  .item {
    cursor: pointer;
    background-color: whitesmoke;
    width: 50vw;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: center;
      overflow: hidden;
      max-height: 0;
      transition: all 0.5s cubic-bezier(0, 1, 0, 1);
    }
    .show {
      height: auto;
      max-height: 9999;
      transition: all 0.5s cubic-bezier(1, 0, 1, 0);
    }
  }
`;
