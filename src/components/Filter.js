import React,{Component} from 'react';
import './Filter.css';

class Filter extends Component{
    render(){
        return(
            <div className="filter">
                <h4>Filter By:</h4>
               <ul>
                   <li>
                       <a >
                           Price
                           <span >+</span>
                       </a>
                   </li>
                   <li>
                       <a >
                           <span ></span>
                           Size
                       </a>
                   </li>
                   <li>
                       <a >
                           <span ></span>
                           Color
                       </a>
                   </li>
                   <li>
                       <a >
                           <span ></span>
                           Gender
                       </a>
                   </li>
               </ul>
            </div>
        )
    }   
}

export default Filter;