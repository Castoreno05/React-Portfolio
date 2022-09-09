import React from "react";
import "../Navbar/nav.css"

export default function Nav({ setContent }) {
  return (
    // <nav className="navbar navbar-dark">
    //   <div className="container-fluid">
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-target="#navbarToggleExternalContent"
    //       aria-controls="navbarToggleExternalContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //   </div>
    // </nav>
    

    <nav className="navLinks">
      <ul>
        <li>
          <a onClick={() => setContent("about-me")}>About Me</a>
        </li>
        <li>
          <a onClick={() => setContent("projects")}>Projects</a>
        </li>
        <li>
          <a onClick={() => setContent("resume")}>Resume</a>
        </li>
        <li>
          <a onClick={() => setContent("contact")}>Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}
