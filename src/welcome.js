import React from 'react';


function Welcome(props){

    const nav=props.currentstate;
    nav.todolist=false;
    console.log(nav);


  
    return(
        <div>
        <center>
        <h1>TO DO LIST</h1>
        <button onClick={() => props.onSubmit("add")}>ADD</button>
        <button onClick={() => props.onSubmit("view")}>VIEW</button>

        </center>
        </div>
    )
}


export default Welcome;