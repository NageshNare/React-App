import React, {Component} from 'react';
import './PLP.css';
import Header from '../../src/components/Head/Header';
import Footer from './Footer';
import Products from './Products';

class PLP extends Component{
    render(){
        return(
            <div className="plp">
                <Header />
                <Products />
                <Footer />
            </div>      
            );
    }
}

export default PLP;