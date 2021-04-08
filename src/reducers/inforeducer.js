const infoREducer=(state="",action)=>{
    switch(action.type){
      case "INFO":
        return action.payload;
      default:
          return state
    }
  }; 

  export default infoREducer;