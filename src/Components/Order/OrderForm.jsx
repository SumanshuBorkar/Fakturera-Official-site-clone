import React, { useState } from "react";
import "../Home/FreeTrialForm.css";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    contact: "",
    address: "",
    postNumber: "",
    city: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted! ✅");
  };

  return (
    <div className="form-container">
      <form className="trial-form" onSubmit={handleSubmit}>
        <h2 className="form-heading">Use and Try Free</h2>

        <input
          type="text"
          name="company"
          placeholder="Company name"
          value={formData.company}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact person"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="postNumber"
          placeholder="Post number"
          value={formData.postNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <p className="form-description">
          You can use and try LättFaktura completely free of charge for 14 days. <br />
          This is a true full version, so you can send 1000 invoices or more, completely free. <br />
          LättFaktura is so easy and self-explanatory that the chance you need support is minimal. <br />
          After the trial, the subscription continues at <strong>SEK 99/month</strong> (billed annually). <br />
          Cancel anytime within 14 days if you don’t want to keep the program.
        </p>

        <p className="form-conditions">
          Click Billing Now to invoice and to approve{" "}
          <a href="/villkorladdaner.html" target="_blank" rel="noopener noreferrer">
            the conditions,
          </a>{" "}
          and your first invoice is normally ready to ship within 5-10 minutes.
        </p>

        <button type="submit" className="submit-btn">
          Billing Now
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
