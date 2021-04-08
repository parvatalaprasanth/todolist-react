import React from 'react';


function Modify(props){

  
    return(
        <div>
        <center>
        <h1>Modify</h1>
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
        <button onClick={() => props.onSubmit("view")}>BACK</button>
        </div>
        </center>
        </div>
    )
}


export default Modify;