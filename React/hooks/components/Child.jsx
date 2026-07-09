import React from "react";
//it is use to memoize Component
const Child = React.memo(({ name }) => {
  console.log("Child Rendered");
  return (
    <div>
      <p>This is Child Component: {name}</p>
    </div>
  );
});

export default Child;
