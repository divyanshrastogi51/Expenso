import React from "react";
import "./Navbar.css";
function Click() {
  var navbar = document.querySelector(".main-nav ul");
  navbar.classList.toggle("active");
}

function Navbar() {
  return (
    <header className="main-header">
      <a href="/" className="brand-logo">
        <div className="brand-logo-name">
          <h1>Expenso</h1>
        </div>
      </a>
      <div href="#" className="toggle-button" onClick={Click}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <a href="/settle">Expense Settlement</a>
          </li>
          <li>
            <a href="/track">Expense Tracker</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
