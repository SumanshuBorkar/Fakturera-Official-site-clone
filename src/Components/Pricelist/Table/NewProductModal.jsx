import React, { useState } from "react";
import "./NewProductModal.css";

export default function NewProductModal({ visible, onClose, onCreate }) {
  const [formData, setFormData] = useState({
    articleNo: "",
    productService: "",
    inPrice: 0,
    price: 0,
    unit: "",
    inStock: 0,
    description: ""
  });

  if (!visible) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
  };

  return (
    <div className="modal-backdrop">
      <form className="modal-content" onSubmit={handleSubmit}>
        <h2>Add New Product</h2>

        <label>
          Article No:
          <input name="articleNo" value={formData.articleNo} onChange={handleChange} required />
        </label>

        <label>
          Product/Service:
          <input name="productService" value={formData.productService} onChange={handleChange} required />
        </label>

        <label>
          In Price:
          <input type="number" name="inPrice" value={formData.inPrice} onChange={handleChange} required />
        </label>

        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </label>

        <label>
          Unit:
          <input name="unit" value={formData.unit} onChange={handleChange} required />
        </label>

        <label>
          In Stock:
          <input type="number" name="inStock" value={formData.inStock} onChange={handleChange} required />
        </label>

        <label>
          Description:
          <input name="description" value={formData.description} onChange={handleChange} />
        </label>

        <div className="modal-buttons">
          <button type="button" onClick={onClose}>Cancel</button>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}
