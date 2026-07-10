import { useState, useRef, useMemo, useCallback } from "react";
import "./App.css";
import Child from "../components/Child";
import Child2 from "../components/Child2";

function App() {
  // const [image,setImage] = useState(null);
  // const imageRef = useRef();

  const [count, setCount] = useState(0);

  // function handleChange (e){
  //   let file = e.target.files[0];

  //   if(file){
  //     const imageUrl = URL.createObjectURL(file);
  //     setImage(imageUrl);
  //   }

  // }

  // function removeImage(){
  //    setImage(null);
  //    imageRef.current.value = '';

  // }

  function increaseCount() {
    setCount((prev) => prev + 1);
  }

  // function expensiveCalculation(num) {
  //   console.log("Calculating");
  //   let result = 0;
  //   for (let i = 0; i < 1000000; i++) {
  //     result += num;
  //   }
  //   return result;
  // }

  // const result = expensiveCalculation(5);
  // const result = useMemo(()=> expensiveCalculation(5),[]);
  // const result = useMemo(()=> expensiveCalculation(count),[count]);

  const handleClick = useCallback(() => {
    console.log("Clicked!!");
  }, []);

  return (
    ///////////////////////////////////////////////useRef and useState///////////////////////////////////////////////////////////
    // <>
    //   <input type="file" accept="image/jpeg, image/png" ref={imageRef}
    //   onChange={handleChange}/>

    //   <button onClick={removeImage}>Remove Image</button>

    // {image && (
    //   <div><img src={image} alt="Preview Image"  style={{width:'200px'}}/></div>
    // )}

    // </>
    //////////////////////////////////////react.memo///////////////////////////////////////////////
    // <>

    //   {/* <Child name = "Aryan"/> */}
    //   <Child name = {count}/>

    //   <h2>Counter</h2>
    //   <p>Count:{count}</p>
    //   <button onClick={increaseCount}>Increase</button>

    // </>
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////useMemo////////////////////////////////////////////////////////////////
    /////////////////used to memoize values
    // <>
    //   <h2>Counter</h2>
    //    <p>Count:{count}</p>
    //    <button onClick={increaseCount}>Increase</button>
    //   {/* <p>Result: {expensiveCalculation(5)}</p> */}
    //   <p>Result: {result}</p>
    // </>

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////useCallback///////////////////////////////////////////////////

    <>
      <h2>Counter</h2>
      <p>Count:{count}</p>
      <button onClick={increaseCount}>Increase</button>
      <Child2 handleClick={handleClick} />
    </>

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  );
}

export default App;
