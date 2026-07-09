import React from "react";

const Child = React.memo(({ name }) => {
  console.log("Child Rendered");
  return (
    <div>
      <p>This is Child Component: {name}</p>
    </div>
  );
});

export default Child;
