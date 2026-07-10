import Child from "./child";
function Parent({name}){
    return(

        <div style={{border: '1px solid blue', padding: '10px'}}>
        <p>This is Parent</p>
        {/* Parent keeps drilling the prop down to Child. */}
        <Child name={name}/>
        </div>
    )
    
}
export default Parent;