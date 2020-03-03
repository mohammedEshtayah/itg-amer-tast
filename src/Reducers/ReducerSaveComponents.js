export default  ( state =[] ,action) =>{
    switch(action.type) {
        case "saveComponents":   
            return { 
                Header: action.Header, 
                Footer:action.Footer,  
                    } ;  
        default:
            return state
      }
    
};

 