import { useContext, useState } from "react";
import { UserContext } from "../src/context/userContext";

function GrandChild(){
    const {name, setName} = useContext(UserContext);
    const [user,setUser] = useState('');
    return(

        <div  style={{border: "1px green solid", padding :'10px'}}>
        <p>This is GrandChild</p>
        <p>Good Morning: {name}</p>
        <input
            type="text"
            placeholder="Enter User name"
            value={user}
            onChange={e => setUser(e.target.value)}
        />
        <button onClick={() => setName(user)}>Update Name</button>
        </div>
    )
    
}
export default GrandChild;