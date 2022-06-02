import React, { Component } from 'react';
import Parent from '../Parent/Parent';
import Product from '../Product/Product';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: '',
            error: null,
            isLoaded: false,
            users: []

        };
        this.handleHoverItem = this.handleHoverItem.bind(this);
        this.handleHoverLeave = this.handleHoverLeave.bind(this)
      }

      componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(res => res.json())
          .then(
            (result) => {
              // console.log("data Result===>", result)
              this.setState({
                isLoaded: true,
                users: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    

      handleHoverItem = (e) => {
        var item = e.target.getAttribute('just-check');
        this.setState({
            currentValue: item
        });
      }

      handleHoverLeave = ()=>{
        this.setState({
          currentValue: ''
        })
      }
      
      render() {
        var { currentValue, users } = this.state;
        return (
          <div>
            {
              users.map(user => 
                <p>{ user.name}</p>
             )
            }
            <Parent></Parent>
            <Product currentValue={currentValue}></Product>
            <li
              type="button" just-check = "Wow! Hover Me."
              onMouseEnter={this.handleHoverItem}
              onMouseLeave={this.handleHoverLeave}
            >Value</li>
          </div>
        );
      }
}

export default Shop;