import React from 'react';


function Viewitems(props){

    const nav=props.currentstate;
    nav.todolist=false;
    console.log(nav);

  
    return(
        <div>
        <center>
        <h1>List of items</h1>
        <h1>content</h1>
        <button>modify</button>
        <button>delete</button>
        <button onClick={() => props.onSubmit("back")}>BACK</button>
        
        </center>
        </div>
    )
}


export default Viewitems;