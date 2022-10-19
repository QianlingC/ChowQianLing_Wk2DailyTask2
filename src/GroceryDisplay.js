import React from "react";
import GroceryData from "./GroceryData";

const GroceryDisplay = () => {
  const datagrocery = GroceryData.grocery.map((g) => {
    return (
      <div key={g.id} style={{ textAlign: "center" }}>
        <h5>{g.name}</h5>
        <p>${g.price}</p>
      </div>
    );
  });

  return (
    <React.Fragment>
      <h2 style={{ textAlign: "center" }}>Grocery List</h2>
      {datagrocery}
    </React.Fragment>
  );
};

export default GroceryDisplay;
