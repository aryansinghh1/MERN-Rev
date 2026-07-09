import React from "react";

// This child is memoized so it only re-renders when its props change.
const Child2 = React.memo(({ handleClick }) => {
  console.log("Child 2 rendered");
  return (
    <div style={{ border: "1px black solid" }}>
      <p>This is Second Child Component</p>
      <button onClick={handleClick}>Child 2 button</button>
    </div>
  );
});

export default Child2;
