import React, { Component } from 'react';
import axios from 'axios';
import Product from './product';
import './Products.css';
import Filter from './Filter';
import {Link} from 'react-router-dom';

class Products extends Component{

    state ={
        product: []
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            const posts = response.data.slice(0, 20);
            const updatedProduct = posts.map(post =>{
                return{
                    ...post,
                    
                }
            })
            this.setState({product: updatedProduct})  
          
            
        })
        .catch(error =>{
            console.log(error);
        })
    }
    render(){

        let products = this.state.product.map(p =>{
            console.log(p)
            return (<Link to="/product">  
            <Product 
                
                ID ={p.id}
                Title = {p.title}
                Thumbnailurl={p.thumbnailUrl}
             />
             </Link>)
        
        })
        return(
            <div className="main-container">
                <div className="filter">
                    <Filter />
                </div>
                <div className="products">
                     {products}
                </div>
                

            </div>
            

        );
    }
}

export default Products;

