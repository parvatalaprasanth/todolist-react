const listREducer=(state=[],action)=>{
    switch(action.type){
      case "VIEW":
        return state;
      case "ADD":
          {
              const l=state.length;
              const newlitem={
                  id:l,
                  info:action.payload.info,
                  content:action.payload.content
              }
              state.push(newlitem);
              return state;
          }
      case "DELETE":
        {
          state = state.filter(function(item) {
            return item !== action.payload;
        })
        return state;
        }
      case "MODIFY":
        {
          console.log(state);
          console.log(action.payload);
          var x=0
          let l=state.length;
          for( let i=0;i<l;i++){
            console.log(i);
          
            if(state[i].info===action.payload.previnfo && state[i].content===action.payload.prevcontent){
                x=i;
                
            }}
            state[x].info=action.payload.newinfo;
            state[x].content=action.payload.newcontent;
            return state;
          }
        
      default:
        return state
    }
  }; 

export default listREducer;




