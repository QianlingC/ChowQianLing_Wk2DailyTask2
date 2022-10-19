import React, { useState } from "react";
import data from "./Data";

const AppData = () => {
  const [isHovering, setIsHovering] = useState(false);

  const MouseIn = () => {
    setIsHovering(true);
  };

  const MouseOut = () => {
    setIsHovering(false);
  };

  const dataList = data.employee.map((d) => {
    return (
      <div key={d.id} style={{ textAlign: "center" }}>
        <img src={d.photo} alt="img" />

        <h4 onMouseOver={MouseIn} onMouseOut={MouseOut}>
          {d.name}
        </h4>

        {isHovering && (
          <ul style={{ border: "1px solid" }}>
            <li>Age: {d.age}</li>

            <li>Date of Birth: {d.dateOfBirth}</li>

            <li>Department: {d.department}</li>

            <li>Salary:{d.salary}</li>
          </ul>
        )}

        <p>{d.designation}</p>
      </div>
    );
  });

  return (
    <React.Fragment>
            <h2 style={{ textAlign: "center" }}>Employee Data</h2>
            {dataList}
          
    </React.Fragment>
  );
};
export default AppData;
