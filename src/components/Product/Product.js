import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
       super(props);
       this.state = {
           
       }
    }
    
    render() {
        const { currentValue } = this.props;
        return (
            <div>
                <h2>Product { currentValue } </h2>
            </div>
        );
    }
}

export default Product;