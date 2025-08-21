import React, { useState, useEffect } from "react";
import Search from "../../../assets/Search.png";
import AddIcon from "../../../assets/AddIcon.png";
import PrintIcon from "../../../assets/PrintiCON.png";
import ToggleIcon from "../../../assets/ToggleIcon.png";
import ProductRow from "./ProductRow";
import "./Table.css";
import NewProductModal from "./NewProductModal";

const API_URL = "https://fakturera-official-backend.onrender.com/api/products";

const Table = () => {
  const [products, setProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product list from backend on mount
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  // Editing product and updating it live to backend
  const updateProduct = (index, key, value) => {
    const updated = [...products];
    updated[index][key] = value;
    setProducts(updated);

    // Update just this field in the backend
    const productId = updated[index].id;

    fetch(`https://fakturera-official-backend.onrender.com/api/products/${productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated[index])
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update product");
        return res.json();
      })
      .then((savedProduct) => {
        // Keep UI in sync, necessary if backend auto-updates anything
        setProducts((prev) => {
          const next = [...prev];
          next[index] = savedProduct;
          return next;
        });
      })
      .catch((err) => {
        alert("Failed to save change to backend!");
        console.error(err);
      });
  };

  const handleCreateNewProduct = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleModalCreate = (newProduct) => {
    fetch("https://fakturera-official-backend.onrender.com/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to create product");
        return res.json();
      })
      .then((createdProduct) => {
        setProducts((prevProducts) => [...prevProducts, createdProduct]);
        setModalVisible(false);
      })
      .catch((err) => {
        alert("Error creating new product!");
        console.error(err);
      });
  };


  if (loading) {
    return <div className="table-container">Loading...</div>;
  }

  return (
    <div className="table-container">
      {/* Top Section */}
      <div className="table-top">
        {/* Search Inputs */}
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
        {/* Actions */}
        <div className="table-actions">
        <button className="action-btn" onClick={handleCreateNewProduct}>
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
              <th className="In-Price">Price</th>
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
                selected={selectedRow === idx}
                onSelect={() => setSelectedRow(idx)}
              />
            ))}
          </tbody>
        </table>
      </div>
      <NewProductModal
        visible={modalVisible}
        onClose={handleModalClose}
        onCreate={handleModalCreate}
      />
    </div>
  );
};

export default Table;
