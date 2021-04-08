import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { viewlist,deletelist,info,content,modifylist } from './action/index';


function Modify(props){
    
    const Info=useSelector(state=>state.info);
    const Content=useSelector(state=>state.content);
    const [previnfo, setinfo] = useState(Info);
    const [prevcontent, setcontent] = useState(Content);
    const dispatch=useDispatch();
    
    function view(){
        dispatch(info(""));
        dispatch(content(""));
        props.onSubmit("view");

    }

    function modify(){
        console.log(previnfo,prevcontent,Info,Content);
        dispatch(modifylist(previnfo,prevcontent,Info,Content));
        view();
    }

    return(
        <div>
        <center>
        <h1>Modify</h1>
        <div>
        <h2>heading</h2>
        <input type="text"  value={Info} onChange={(e) => dispatch(info(e.target.value))}></input>
        </div>
        <div>
        <h2>information</h2>
        <input type="text"  width="100" height="48" value={Content} onChange={(e) => dispatch(content(e.target.value))} ></input>
        </div>
        <div>
        <button  onClick={() =>modify() }>SAVE</button>
        <button onClick={() =>view() }>BACK</button>
        </div>
        </center>
        </div>
    )
}


export default Modify;