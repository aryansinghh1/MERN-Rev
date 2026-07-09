

import { useState } from "react";
import "./App.css";

function App() {

  const [image,setImage] = useState(null);

  function handleChange (e){
    let file = e.target.files[0];

    if(file){
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }

  }

  function removeImage(){
     setImage(null);
  }

  return (
    <>
      <input type="file" accept="image/jpeg, image/png" 
      onChange={handleChange}/>

      <button onClick={removeImage}>Remove Image</button>

    {image && (
      <div><img src={image} alt="Preview Image"  style={{width:'200px'}}/></div>
    )}

    </>
  );
}

export default App;
