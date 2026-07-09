

import { useState ,useRef} from "react";
import "./App.css";

function App() {

  const [image,setImage] = useState(null);
  const imageRef = useRef();

  function handleChange (e){
    let file = e.target.files[0];

    if(file){
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }

  }

  function removeImage(){
     setImage(null);
     imageRef.current.value = '';

  }

  return (
    <>
      <input type="file" accept="image/jpeg, image/png" ref={imageRef}
      onChange={handleChange}/>

      <button onClick={removeImage}>Remove Image</button>

    {image && (
      <div><img src={image} alt="Preview Image"  style={{width:'200px'}}/></div>
    )}

    </>
  );
}

export default App;
