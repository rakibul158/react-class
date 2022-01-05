import React, { Component } from 'react';
import Product from '../Product/Product';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: ''
        };
        this.currentValue = this.currentValue.bind(this)
      }
      currentValue = (e) => {
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
              onMouseEnter={this.currentValue}
            >Value</li>
          </div>
        );
      }
}

export default Shop;