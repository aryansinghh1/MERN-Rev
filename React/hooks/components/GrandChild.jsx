import { useContext } from "react";
import { UserContext } from "../src/context/userContext";

function GrandChild(){
    const {name} = useContext(UserContext)
    return(

        <div>
        <p>This is GrandChild</p>
        <p>Good Morning: {name}</p>
        </div>
    )
    
}
export default GrandChild;