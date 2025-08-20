import React, { useContext } from "react";
import "./Menu.css";
import { AppContext } from "../../context";

const menuItems = [
  { name: "Invoices", icon: "🧾" },
  { name: "Customers", icon: "👤" },
  { name: "My Business", icon: "🏢" },
  { name: "Invoice Journal", icon: "📑" },
  { name: "Price List", icon: "💲" },
  { name: "Multiple Invoicing", icon: "🗂" },
  { name: "Unpaid Invoices", icon: "⏳" },
  { name: "Offer", icon: "📝" },
  { name: "Inventory Control", icon: "📦", disabled: true },
  { name: "Member Invoicing", icon: "👥", disabled: true },
  { name: "Import/Export", icon: "🔄" },
  { name: "Log out", icon: "🚪" },
];

const Menu = () => {
  const { isMenuOpen } = useContext(AppContext);

  return (
    <aside className={`menu-sidebar ${isMenuOpen ? "open" : ""}`}>
      <div className="menu-header">
        <h1 className="menu-title">Menu</h1>
      </div>

      <ul className="menu-list">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`menu-item ${item.disabled ? "disabled" : ""}`}
          >
            <span className="item-icon">{item.icon}</span>
            <span className="item-text">{item.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Menu;
