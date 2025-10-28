// src/components/PaymentForm.js
import React, { useState } from "react";
import "./form.css"

function PaymentForm({ onAddPayment }) {
  const [formData, setFormData] = useState({
    studentName: "",
    className: "",
    term: "",
    amountDue: "",
    amountPaid: "",
    paymentMethod: "Cash",
    receiptNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const balance = formData.amountDue - formData.amountPaid;
    const status =
      balance === 0 ? "Paid" : balance < formData.amountDue ? "Partial" : "Unpaid";

    onAddPayment({ ...formData, balance, status });
    setFormData({
      studentName: "",
      className: "",
      term: "",
      amountDue: "",
      amountPaid: "",
      paymentMethod: "Cash",
      receiptNumber: "",
    });
  };

  return (
    <div className="payment-form">
      <h2>🧾 Record School Fees Payment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="studentName"
          placeholder="Student Name"
          value={formData.studentName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="className"
          placeholder="Class (e.g., S3)"
          value={formData.className}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="term"
          placeholder="Term (e.g., Term 1)"
          value={formData.term}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amountDue"
          placeholder="Amount Due (RWF)"
          value={formData.amountDue}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amountPaid"
          placeholder="Amount Paid (RWF)"
          value={formData.amountPaid}
          onChange={handleChange}
          required
        />
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
        >
          <option>Cash</option>
          <option>Bank Transfer</option>
          <option>Mobile Money</option>
          <option>Card</option>
        </select>
        <input
          type="text"
          name="receiptNumber"
          placeholder="Receipt Number"
          value={formData.receiptNumber}
          onChange={handleChange}
        />

        <button type="submit">💾 Save Payment</button>
      </form>
    </div>
  );
}

export default PaymentForm;
