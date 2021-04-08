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
      default:
        return state
    }
  }; 

export default listREducer;




