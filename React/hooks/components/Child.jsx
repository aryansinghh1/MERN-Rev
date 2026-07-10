import React from "react";
import GrandChild from "./GrandChild";
//it is use to memoize Component
const Child = React.memo(({name}) => {
  // console.log("Child Rendered");
  return (
    <div style={{border: '1px solid red', padding: '10px'}}>
      {/* <p>This is Child Component: {name}</p> */}
      <p>This is Child Component</p>
      {/* Child passes the prop to GrandChild, completing the drilling chain. */}
      <GrandChild name={name}/>

    </div>
  );
});

export default Child;
