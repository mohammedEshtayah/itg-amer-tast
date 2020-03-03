import React, { Component } from 'react';
import './Footer.css'
const Footer= () =>{
    return(
        <footer className="itg-footer" >
            <div  >
                <h1 className="itg-name">ITG</h1> 
            </div>
            <div>
                <h2>Practices</h2>
                <p>Digital Commerce Solutions</p>
                <p>QA Engineering</p>
                <p>Custom Development</p>
                <p>Mobile</p>
            </div>
            <div    >
                <h2>Company</h2>
                <p>ITG Team</p>
                <p>Partners</p>
                <p>Case Studies</p>
                <p>Careers</p>
            </div>
            <div   className="itg-mysite">
                <ul>
                    <li> facebook</li>
                    <li> youtube</li>
                    <li> twitter</li> 

                </ul>
            </div>
        
    </footer>
   
    );
    
}
export default Footer