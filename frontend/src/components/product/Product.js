import React from 'react'
import {Link} from 'react-router-dom'
const Product = ({products})=>{
    return(
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
        <div className="card p-3 rounded">
          <img
            className="card-img-top mx-auto"
            src={products.images[0].url}
            alt="aja"
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">
              <Link to={`product/${products._id}`}>{products.name}</Link>
            </h5>
            <div className="ratings mt-auto">
              <div className="rating-outer">
                <div className="rating-inner"></div>
              </div>
              <span id="no_of_reviews">({products.numOfReviews} Reviews)</span>
            </div>
            <p className="card-text">{products.price} BDT</p>
            <Link to={`product/${products._id}`} id="view_btn" className="btn btn-block">View Details</Link>
          </div>
        </div>
        </div>

    )
}
export default Product