import React, { Component } from 'react';
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
        // this.setState = (prevState, currStten) => {

        //   console.log("shop =====", e.target.getAttribute('just-check'));
        // };

        // const { name, value } = e.target;
        // this.setState({
        //   currentValue: value
        // });
        // console.log(item);
      }
      render() {
        var currentValue = this.state.currentValue;
        return (
          <div>
            <Product currentValue={currentValue}></Product>
            <li
              type="button" just-check = "Hello"
              onMouseEnter={this.handleHoverItem}
            >Value</li>
          </div>
        );
      }
}

export default Shop;