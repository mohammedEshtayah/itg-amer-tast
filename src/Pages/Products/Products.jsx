import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Products.css' 
import { connect} from 'react-redux' 
import { bindActionCreators } from 'redux';
import fetchProducts from './fetchProducts'; 
import {store} from '../../index'
const mapStateToProps = state => { 
    return { 
        products: state.ProductsReducer,
        Components:state.ReducerSaveComponents,
        ValueSearch:state.ReducerSearch
    };
 }; 

  
function mapDispatchToProps(dispatch) {
    return {
      getProducts: bindActionCreators(fetchProducts, dispatch),
      clearProducts:action=> dispatch({type:'clearProducts'}) 
  
      };
     
  }   

class Products extends React.Component{

constructor(props){
    super(props);
        this.state={  
        products: [  ],
        Switch:true,
        NumberProduct:0
    };
   
}
componentWillReceiveProps(nextProps){ 
    console.log(nextProps.products) 
    if(this.state.NumberProduct > 0  ){
        this.setState({products:nextProps.products })  

    }else{
        this.setState({products:nextProps.products.slice(1, 10)})  

    }
}
 

componentDidMount(){ 
    window.addEventListener('scroll', this.updateDimensions); 
   
           
}
componentWillUnmount() {
    window.addEventListener('scroll', this.updateDimensions);
}
updateDimensions=( )=> {
    var a=((document.body.clientHeight)-(627))/2;
 

    if( window.scrollY > a){ 
        for(let i=0; this.state.products.length!= this.props.products.length && i <10 ;i++){
            this.setState(prevState => ({
                products: [...prevState.products, this.props.products[i]]
            }))
        }   
    
    }
    
  
}
ValueSearch=(e)=>{
    console.log(e.target.value)
    this.props.clearProducts()
    this.props.getProducts(e.target.value); 
    this.setState({NumberProduct:e.target.value})

}
render(){
    {
        
        if( this.props.ValueSearch != "" ){ 
            
            this.state.products=this.props.products .filter(product=> 
            product.name.toLowerCase().indexOf(this.props.ValueSearch.toLowerCase())!== -1)
            this.state.Switch=true;

        }else{
            if(this.state.Switch==true){
                this.state.products=this.props.products.slice(1, 10)
                this.state.Switch=false;
                
            }

        }
        
    }
    return(
        <div> 
            {this.props.Components.Header}  
            <section > 
                    
            <input type="text"   onChange={this.ValueSearch} placeholder="Products Number"/>
                    
                    <div className="main-content2">
                        <div id="itgproducts" className="itg-products">
                        {
                            this.state.products.map((d,x) =>(    
                               <div key={x} className="itg-product">
                                   <div>
                                        <img src={ d.image.dis_base_link} width="240" height="270" alt={ d.image.alt}/>  
                                    </div>
                                    <h3>{d.name}</h3> 
                                    <p> {d.price}$</p>
                              
                                </div>  
                            )
                            )
                        }
                    </div>
                    

                    </div>
                </section>
             {  this.props.Components.Footer  } 
        </div>
        );
    }

    }

   

export default  connect(  mapStateToProps,mapDispatchToProps ) (Products);

