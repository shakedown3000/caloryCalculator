import React, { useState } from "react";
import "./Header.css";
import Darkmode from "../Darkmode/Darkmode";

interface DarkProps {
  dark: boolean;
  // Zustandsänderungsfunktion für boolean
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<DarkProps> = ({ dark, setDark }) => {
  // Wenn Funktion aufgerufen wird, wird setDark aktiviert, der Zustand wird ins Gegenteil umgestellt, wie Schalter
  const switchToDarkMode = () => {
    console.log("Darkmode activated/Deactivated.");
    setDark((mode) => !mode);
  };

  return (
    <header className="toggleDarkmode">
      <img className="logo" src="/Nutritionist_Logo.png" alt="Logo" />
      <nav>
        <p>
          <a href="#">Home</a>
        </p>
        <p>
          <a href="#">About</a>
        </p>
        <p>
          <a href="#">Team</a>
        </p>
        <p>
          <a href="#">Process</a>
        </p>
        <p>
          <a href="#">Pricing</a>
        </p>
        <p>
          <a href="#">Blog</a>
        </p>

        <button id="contact_button">Contact Us</button>
        <div onClick={switchToDarkMode}>
          <img
            src={dark ? "/Sun.svg" : "/Moon.svg"}
            alt={dark ? "lightmode icon" : "darkmode icon"}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
