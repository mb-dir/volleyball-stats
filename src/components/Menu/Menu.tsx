import React from "react";
import "./menu.css";
import { Link, useLocation } from "react-router-dom";

interface MenuItem {
  label: string;
  onClick?: () => void;
}

interface MenuProps {
  items: MenuItem[];
  className?: string;
}

const Menu: React.FC<MenuProps> = ({ items, className }) => {
  const { pathname } = useLocation();

  return (
    <div className={`menu ${className || ""}`}>
      {
        <ul className="menu__list">
          {items.map((item, index) => {
            const itemPath = item.label.toLowerCase();
            const isActive = pathname.includes(itemPath);
            return (
              <li className="menu__item" key={index} onClick={item.onClick}>
                <Link
                  className={`menu__label ${isActive
                    ? "menu__label--active"
                    : ""}`}
                  to={item.label.toLowerCase()}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
};

export default Menu;
