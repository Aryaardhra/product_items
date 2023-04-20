import React, {Component} from 'react'
import "../header/Header.css";
 
class Header extends Component {
    constructor(){
        super();
        this.state = {
            title: 'React App',
            keyword: 'User Input'
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({keyword:event.target.value ? event.target.value :"User Input"})
         // passing to parent 
         this.props.userInput(event.target.value) 
    }  

    render(){
        
        return(
            <>
            <header>
                <div className="logo">{this.state.title}</div>
                <input onChange={this.handleChange}/>
                <div style={{color:"white",fontSize:"20px"}}>{this.state.keyword}</div>
            </header>
            </>
        )
    }
}

export default Header