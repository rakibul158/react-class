import React, { Component } from 'react';
import Product from '../Product/Product';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: ''
        };
      }
      currentValue = (e) => {
          var item = e.target.getAttribute('just-check');
        this.setState({
            currentValue: item
        });
        console.log(item);
      }
      render() {
        return (
          <div>
            <li
              type="button" just-check = "Hello"
              onMouseEnter={this.currentValue}
            >Value</li>
          </div>
        );
      }
}

export default Shop;