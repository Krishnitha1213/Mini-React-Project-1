import React from "react";
import ReactDOM  from "react-dom";
import "./index.css";

let curDate = new Date(2000,5,12, 17);
curDate = curDate.getHours();
let greeting = '';
const cssStyle = {};
const hello = {color: 'rgb(217 83 150)'}


if(curDate >= 1 && curDate <12){
    greeting = 'Good Morning';
    cssStyle.color = 'green';
}else if(curDate >=12 && curDate <19){
    greeting = 'Good Afternoon';
    cssStyle.color = 'orange';
}else{
    greeting = 'Good Night'
    cssStyle.color = 'black';
}

ReactDOM.render(
    <>
        <div>
            <center>
                <h1>
                   <span style={hello}> Hello, </span><span style={cssStyle}>{greeting}</span>
                </h1>
            </center>
        </div>
    </>,document.getElementById("root")
    
);
