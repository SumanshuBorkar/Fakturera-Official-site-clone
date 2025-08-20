import React from "react";
import "./Table.css";
import Dots from "../../../assets/Dots.png";

export default function ProductRow({ product, index, onChange, selected, onSelect }) {
  return (
    <tr className="pricelist-row" onClick={onSelect}>
      <td className="arrow-cell">{selected ? "➔" : ""}</td> {/* 🔹 show only if selected */}
      <td className="table-datab-border mobileOnly">
        <input
          value={product.articleNo}
          onChange={(e) => onChange(index, "articleNo", e.target.value)}
        />
      </td>
      <td className="table-datab-border">
        <input
          value={product.productService}
          onChange={(e) => onChange(index, "productService", e.target.value)}
        />
      </td>
      <td className="table-datab-border mobileOnly">
        <input
          type="number"
          value={product.price}
          onChange={(e) => onChange(index, "price", e.target.value)}
        />
      </td>
      <td className="table-datab-border">
        <input
          type="number"
          value={product.inPrice}
          onChange={(e) => onChange(index, "inPrice", e.target.value)}
        />
      </td>
      <td className="table-datab-border mobileOnly">
        <input
          value={product.unit}
          onChange={(e) => onChange(index, "unit", e.target.value)}
        />
      </td>
      <td className="table-datab-border mobileOnly">
        <input
          type="number"
          value={product.inStock}
          onChange={(e) => onChange(index, "inStock", e.target.value)}
        />
      </td>
      <td className="table-datab-border mobileOnly">
        <input
          value={product.description}
          onChange={(e) => onChange(index, "description", e.target.value)}
        />
      </td>
      <td>
        <img style={{ width: "15px" }} src={Dots} alt="" />
      </td>
    </tr>
  );
}
