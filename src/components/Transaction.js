
// Transaction.js
import React from "react";

function Transaction({ id, date, description, category, amount, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(id); // Pass the id to onDelete function when Delete button is clicked
  };

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button onClick={handleDeleteClick}>Delete</button> {/* Attach click event handler */}
      </td>
    </tr>
  );
}

export default Transaction;