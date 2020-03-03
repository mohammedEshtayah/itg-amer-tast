
 
import React from 'react'; 
import { useDispatch } from 'react-redux'
import './Header.css'
import {ActionSearch} from '../../Actions/ActionSearch'
import logo from '../../Images/erp-system-icon.png'


const Header= () =>{
    const dispatch=useDispatch();
    function search(e){

        dispatch(ActionSearch({type:"onChangeSearch",value:e.target.value}))
     
    }
    return(
        <header>
            <div className="itg-logo">
                        <img src={logo} width="50" height="50" alt="Smiley face"/>
                        <span>  ITGsoftware </span>
            </div>
            <div className="link-pages">
                
                <ul>
                    <li> <a href="/login">login</a></li>
                    <li><a href="#">main cart</a> </li>

                </ul> 

                <div className="itg-search"> 
                    <span className="fa fa-search itg-icon-search"></span> 
                    <input type="text"   onChange={search} placeholder="Search..."/>
                </div>
            </div>    
        </header>
          
    );
    
}
export default Header