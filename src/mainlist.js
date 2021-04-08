import React,{useState} from 'react';
import Welcome from './welcome';
import Viewitems from './viewitems';
import Additem from './additem';
import Modify from './modify';


function Mainlist(){
    const [nav, setnev] = useState({
        viewitem:false,
        additem:false,
        modifyitem:false,
        todolist:true
    });

    function Modifyview(mod){
        const newnav={
            viewitem:false,
            additem:false,
            modifyitem:false,
            todolist:false
        };
        if (mod==="add"){
            newnav.additem=true;
        }
        if (mod==="view"){
            newnav.viewitem=true;
        }
        if (mod==="back"){
            newnav.todolist=true
        }
        if (mod==="mod"){
            newnav.modifyitem=true
        }
        
        setnev(newnav);
    }
  
    return(
        <div>
        <center>
        <h1>welcome to to do list</h1>
        {nav.todolist === true && <Welcome onSubmit={(mod) => Modifyview(mod)}  currentstate={nav} /> }
        {nav.viewitem === true && <Viewitems onSubmit={(mod) => Modifyview(mod)}  currentstate={nav}/> }
        {nav.additem === true && <Additem onSubmit={(mod) => Modifyview(mod)}  currentstate={nav}/> }
        {nav.modifyitem === true && <Modify onSubmit={(mod) => Modifyview(mod)}/> }
        </center>
        </div>
    )
}


export default Mainlist;