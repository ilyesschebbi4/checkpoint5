import React from "react";
import First from "./FirstName";
import Last from "./LastName";

function Name (props) {
    return( 
    <div>
<First style={{color:"red",fontSize:'20px'}} name={props.first} /> 

<Last style ={{color:"red"}} name={props.last}/>

    </div>

    )
}
export default Name;