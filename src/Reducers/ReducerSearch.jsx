export default  ( state = ""  ,action) =>{
    switch(action.type) {
        case "onChangeSearch":   
            return  action.value;  
        default:
            return state
      }
    
};

 