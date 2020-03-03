export default  ( state =[] ,action) =>{
    switch(action.type) {
        case "getProducts":  
            return [...state, { 
                                image:action.image ,
                                name: action.name,
                                price: action.price,
                                currency:action.currency,
                                product_id:action.product_id,
                              }
                    ] ;  
            case "clearProducts":  
                return [] ; 
        default:
            return state
      }
    
};

 