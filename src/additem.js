import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { addlist,info,content } from './action'


function Additem(props){

    const dispatch=useDispatch();
    const nav=props.currentstate;
    nav.todolist=false;
    const Info=useSelector(state=>state.info);
    const Content=useSelector(state=>state.content);
    const Viewitems=useSelector(state=>state.list);

    function addtolist(){
        dispatch(addlist(Info,Content));
        dispatch(info(""));
        dispatch(content(""));
    } 
    return(
        <div>
        <center>
        <h1>Add Item</h1>
        <div>
        <h2>heading</h2>
        <input type="text" value={Info} onChange={(e) => dispatch(info(e.target.value))} ></input>
        </div>
        <div>
        <h2>information</h2>
        <input type="text" value={Content} onChange={(e) => dispatch(content(e.target.value))}  width="100" height="48"></input>
        </div>
        <div>
        <button onClick={()=>addtolist()}>SAVE</button>
        <button onClick={() => props.onSubmit("back")}>BACK</button>
        </div>
        </center>
        </div>
    )
}


export default Additem;