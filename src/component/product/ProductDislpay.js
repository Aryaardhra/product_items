import React from 'react'
import "../product/Product.css";

const ProductDislpay = (props) => {
  const renderProduct = props.prodData.map((item) => {
    return(
      <div className="card" key = {item.id}>
        <img src = {item.image} alt = {item.name}/>
        <div className="content">
          <h5>{item.name}</h5>
          <p>{item.description}</p>
          <p>{item.cost}</p>
          <p>{item.uses}</p>
        </div>
      </div>
    )
  })
 // console.log(props)
  return(
    <>
    <div className="main">
      {renderProduct}
    </div>
    </>
  )
}

export default ProductDislpay;