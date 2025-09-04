import React from "react";

function RelativeList() {
  const relatives = [
    "Uncle Raj",
    "Aunt Meena",
    "Cousin Rohit",
    "Grandparents"
  ];

  return (
    <ol key="relativeList">
      {relatives.map((relative, index) => (
        <li key={`relativeListItem${index + 1}`}>{relative}</li>
      ))}
    </ol>
  );
}

export default RelativeList;
