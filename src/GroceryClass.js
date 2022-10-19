import React from "react";
import GroceryData from "./GroceryData";

class GroceryClass extends React.Component {
  render() {
    var dataItem = GroceryData.grocery.map((r) => {
      return (
        <div id={r.id} key={r.id} style={{ textAlign: "center" }}>
          <>
            <h3>{r.name}</h3>

            <h3>{r.price}</h3>
          </>
        </div>
      );
    });

    return (
      <React.Fragment>
        <h2 style={{ textAlign: "center" }}>Grocery Data</h2>
        {dataItem}
      </React.Fragment>
    );
  }
}
export default GroceryClass;
