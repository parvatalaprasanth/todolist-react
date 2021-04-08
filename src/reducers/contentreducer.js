const contentREducer=(state="",action)=>{
    switch(action.type){
      case "CONTENT":
        return action.payload;
      default:
          return state
    }
  }; 

  export default contentREducer;