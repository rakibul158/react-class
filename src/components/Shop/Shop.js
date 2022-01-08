import React, { Component } from 'react';
import Parent from '../Parent/Parent';
import Product from '../Product/Product';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: ''
        };
        this.handleHoverItem = this.handleHoverItem.bind(this)
      }
      handleHoverItem = (e) => {
        var item = e.target.getAttribute('just-check');
        this.setState({
            currentValue: item
        });
      }
      
      render() {
        var { currentValue } = this.state;
        return (
          <div>
            <Parent></Parent>
            <Product currentValue={currentValue}></Product>
            <li
              type="button" just-check = "Wow! Hover Me."
              onMouseEnter={this.handleHoverItem}
            >Value</li>
          </div>
        );
      }
}

export default Shop;