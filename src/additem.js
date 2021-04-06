import React from 'react';


function Additem(props){

    const nav=props.currentstate;
    nav.todolist=false;
    console.log(nav);
  
    return(
        <div>
        <center>
        <h1>Add Item</h1>
        <div>
        <h2>heading</h2>
        <input type="text" ></input>
        </div>
        <div>
        <h2>information</h2>
        <input type="text"  width="100" height="48"></input>
        </div>
        <div>
        <button>SAVE</button>
        <button onClick={() => props.onSubmit("back")}>BACK</button>
        </div>
        </center>
        </div>
    )
}


export default Additem;