import React, { useState, useRef } from "react";
import "./Projects/projects.css";

export default function Collapsible(props) {
  const [isOpen, setIsOpen] = useState(false);

  const parentRef = useRef();

  return (
    <div className="collapsible">
      <button className="flick" onClick={() => setIsOpen(!isOpen)}>
        {props.label}
      </button>
      <div
        className="content-parent"
        ref={parentRef}
        style={
          isOpen
            ? {
                height: parentRef.current.scrollHeight + "px",
              }
            : {
                height: "0px",
              }
        }
      >
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
}
