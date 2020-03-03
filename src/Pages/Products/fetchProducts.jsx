import {productsAction} from '../../Actions/ActionProduct';
import JsonFile from '../../JsonFile/product_hits.json'

   function fetchProducts(x=0) {
    return dispatch => { 
      /*   var products =JsonFile.hits;
        for(let i=0;i<products.length;i++){
             
             dispatch( productsAction({ image: products[i].image  ,
                                        name: products[i].product_name,
                                        price: products[i].price,
                                        currency:products[i].currency,
                                        product_id:products[i].product_id, 
                                        type:"getProducts"
                                    })); 

        }  */   
        if(x==0){
                fetch('http://localhost:3003/',{
                    method:"GET",
                    headers:{
                        'Content-Type':'application/json',
                        'Accept': 'application/json'
                    },
                    mode:'cors',
                    catch:'default'
            
                })
                .then(res => res.json())
                .then(products=> {   
                    var products=products.hits;
                    for(let i=0;i<products.length;i++){ 
                        dispatch( productsAction({  image: products[i].image  ,
                            name: products[i].product_name,
                            price: products[i].price,
                            type:"getProducts"
                        })); 
                    
                    } 
                    return products;
                })   
        }
        else{
                fetch('http://localhost:3003/?param1='+x,{
                    method:"GET",
                    headers:{
                        'Content-Type':'application/json',
                        'Accept': 'application/json'
                    },
                    mode:'cors',
                    catch:'default',
            
                })
                .then(res => res.json())
                .then(products=> {     
                    products.products.forEach(element => {
                        dispatch( productsAction({  image: element.image  ,
                            name: element.product_name,
                            price: element.price,
                            type:"getProducts"
                        })); 
                        
                     });
                        
                    
                    return products;
                })    
            }
        
    }
}

export default fetchProducts; 