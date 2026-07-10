import Parent from "./Parent";
function GrandParent({name}){
    return(

        <div style={{border: '1px solid black', padding: '10px'}}>
        <p>This is GrandParent</p>
        {/* GrandParent forwards the same prop to Parent without using it directly. */}
        <Parent name={name}/>
        </div>
    )
    
}
export default GrandParent;