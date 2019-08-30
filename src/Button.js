import React from "react";
function MyButton (props) {
    return(
<button onClick={() =>{
    window.location = "https://www.facebook.com/ilyess.chebbi"
}} style = {{backgroundColor:"blue" , width:"200px" ,height:"50px"}}>{props.label}</button>

    );
}

export default MyButton;