import React, { Component } from "react";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import ProductDisplay from "./component/product/ProductDislpay";
import JSON from "./component/Data/db.json";
class App extends Component {

  constructor(){
    super()

    this.state = {
      productData:JSON,
      filteredData:JSON
    }
  }

  filteredData = (keyword) => {
    let output = this.state.productData.filter((data) => {
      return data.name.toLowerCase().indexOf(keyword.toLowerCase())>-1
    })
    this.setState({filteredData:output})
  }

render(){
  return (
    <>
    <Header userInput = {(data) => {this.filteredData(data)}}/>
    <ProductDisplay prodData = {this.state.filteredData}/>
    <Footer/>
    </>
  )
}

}

export default App;
