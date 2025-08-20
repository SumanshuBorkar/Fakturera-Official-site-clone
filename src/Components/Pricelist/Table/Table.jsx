import React, { useState } from "react";
import Search from "../../../assets/Search.png";
import AddIcon from "../../../assets/AddIcon.png";
import PrintIcon from "../../../assets/PrintiCON.png";
import ToggleIcon from "../../../assets/ToggleIcon.png";
import ProductRow from "./ProductRow";
import products from "../Data/Products";
import "./Table.css";

const Table = () => {
  const [selectedRow, setSelectedRow] = useState(null); 

  const updateProduct = (index, key, value) => {
    setProducts((products) => {
      const updated = [...products];
      updated[index][key] = value;
      return updated;
    });
  };

  return (
    <div className="table-container">
      {/* 🔹 Top Section */}
      <div className="table-top">
        {/* Left: Search Inputs */}
        <div className="table-search">
          <div className="search-box">
            <input type="text" placeholder="Search Article No" />
            <img src={Search} alt="Search" />
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search Product" />
            <img src={Search} alt="Search" />
          </div>
        </div>

      
        <div className="table-actions">
          <button className="action-btn">
            <span className="Desktop-only">New Product</span>
            <img src={AddIcon} alt="Add" />
          </button>
          <button className="action-btn">
            <span className="Desktop-only">Price List</span>
            <img src={PrintIcon} alt="Print" />
          </button>
          <button className="action-btn">
            <span className="Desktop-only">Advanced Mode</span>
            <img src={ToggleIcon} alt="Toggle" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="Bottom-Table-Container">
        <table className="pricelist-table">
          <thead>
            <tr className="pricelist-header">
              <th className="arrow-cell"></th>
              <th className="Article-Cell mobileOnly">Article No ⬇️</th>
              <th className="Products-services">Product/Service</th>
              <th className="In-Price mobileOnly">In Price</th>
              <th className="In-Price ">Price</th>
              <th className="In-Price mobileOnly">Unit</th>
              <th className="In-Price mobileOnly">In Stock</th>
              <th className="Description mobileOnly">Description</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, idx) => (
              <ProductRow
                key={product.id}
                index={idx}
                product={product}
                onChange={updateProduct}
                selected={selectedRow === idx}       // 🔹 is this row selected?
                onSelect={() => setSelectedRow(idx)} // 🔹 handler for click
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
