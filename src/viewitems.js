import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { viewlist,deletelist,info,content } from './action/index';

function Viewitems(props){

    const nav=props.currentstate;
    nav.todolist=false;
    const dispatch=useDispatch();
    const Viewlist=useSelector(state=>state.list);
    const Content=useSelector(state=>state.content);
    
    function print(){
        console.log(Viewlist);
    }

    function modify(x){
        dispatch(info(x["info"]));
        dispatch(content(x["content"]));
        props.onSubmit("mod");
    }
  
    return(
        <div>
        <center>
        <h1>List of items</h1>
        <h1>content</h1>
        <table>
                    {Viewlist.map((x)=>(
                    <tr>
                        <td>{x["info"]}  </td>
                        <td> {x["content"]} </td>
                        <td> <button onClick={() => modify(x)}>modify</button> </td>
                        <td> <button onClick={()=>dispatch(deletelist(x))}>delete</button> </td>
                    </tr>
                    ))}
        </table>
        <button onClick={() => props.onSubmit("back")}>BACK</button>
        
        </center>
        </div>
    )
}


export default Viewitems;