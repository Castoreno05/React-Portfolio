import React, { useState } from "react";
import "./Projects/projects.css";


export default function Collapsible(props) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible">
      <button className="flick" onClick={() => setIsOpen(!isOpen)}>
        {props.label}
      </button>
      {isOpen && (
        <div>
          {props.children}
        </div>
      )}
    </div>
  );
}
