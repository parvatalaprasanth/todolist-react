export const addlist=(info,content)=>{
    return{
      type:'ADD',
      payload:{
          info:info,
          content:content
      }
    };
  };

  export const deletelist=(obj)=>{
    return{
      type:'DELETE',
      payload:obj
    };
  };


  export const viewlist=()=>{
    return{
      type:'VIEW',
      payload:{}
    };
  };

  export const info=(info)=>{
    return{
      type:'INFO',
      payload:info
    };
  };

  export const content=(content)=>{
    return{
      type:'CONTENT',
      payload:content
    };
  };


