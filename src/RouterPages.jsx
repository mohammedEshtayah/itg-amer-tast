import React, { Component } from 'react'; 
import { connect} from 'react-redux'
import { BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom'  
import Products from "./Pages/Products/Products"; 
import { bindActionCreators } from 'redux';
import fetchProducts from './Pages/Products/fetchProducts'; 
import Footer  from './Components/Footer/Footer'; 
import Header from './/Components/Header/Header'; 
import {ActionSaveComponents} from './Actions/ActionsaveComponents'


 
 
function mapDispatchToProps(dispatch) {
  return {
    getProducts: bindActionCreators(fetchProducts, dispatch),
    saveComponentsAction:action=> {dispatch(ActionSaveComponents(action))}

    };
   
}   
class RoterPages extends Component { 

  constructor(props) {
    super(props);
   

    this.state = 
    {  
    };
 
  }
   

  componentWillMount(){
    this.props.getProducts(); 
    this.props.saveComponentsAction({
      Header: <Header changeStyleMenu={this.changeStyleMenu}/>, 
      Footer:<Footer/> ,  
    })
    
  }

 
  
  
  render() {
    return (
      <Router>
        <div  >
            <Switch>      
                <Route exact path='/' render={() => <Products to="/Products"   />   }/>
                <Route component = {notFound} />  

        </Switch>
      </div>
      </Router>
    );
    function notFound() {
      return <h2>notFound</h2>;
    }
  }
  
  
}
export default  connect(  null,mapDispatchToProps) (RoterPages);
