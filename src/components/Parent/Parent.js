import React, { Component } from 'react';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: '',
            name: '',
            email: ''
        };
        this.handleHoverItem = this.handleHoverItem.bind(this);
        this.yourName = this.yourName.bind(this);
        this.yourEmail = this.yourEmail.bind(this);
    }


    handleHoverItem= (e) =>{
        var item = e.target.getAttribute('just-check');
        this.setState({
            currentValue: item
        });
        // console.log(item);
    }

    yourName = (e) => {
        var name = e.target.value;
        this.setState({
            name: name
            
        });
        console.log(name);
    }

    yourEmail = (e) =>{
        var email = e.target.value;
        this.setState({
            email: email
            
        });
        console.log(email);
    }
    
    header(){
        const header = "Header";
        var { currentValue } = this.state;
        return (
            <>
                <h2>{header}</h2>
                <h4>{ currentValue }</h4>
                <button just-check="Yeah! You Click Me!" onClick={this.handleHoverItem}>Click Me</button>
                
            </>
            
        )
    }

    submitForm()  {
        return (
            <>
                <h4>User Form</h4>
                <input type="text" id="name" onChange={this.yourName} placeholder="Name" />
                <br />
                <br />
                <input type="text" id="email" onChange={this.yourEmail} placeholder="Email" />
                <br />
            </>
        )
    }

    showFormData(){
        var { name, email } = this.state;
        return(
            <>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            </>
        )
    }

    render() {
        return (
            <div>
                { this.header() }
                { this.submitForm() }
                { this.showFormData() }
            </div>
        );
    }
}

export default Parent;