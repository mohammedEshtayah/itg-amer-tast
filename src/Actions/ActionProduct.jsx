export  const productsAction= data=>{
   
  
    return{
        image: data.image,
        name:data.name,
        price:data.price,  
        currency:data.currency,
        product_id:data.product_id, 
        type:"getProducts"
    } 

     
}; 
     
     