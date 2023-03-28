import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`header ${className || ""}`}>
      <h1>
        <Link className="header__content" to="/">
          Volley-Stats
        </Link>
      </h1>
    </header>
  );
};

export default Header;
