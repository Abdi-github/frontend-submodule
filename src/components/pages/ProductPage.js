import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../data";
import Rating from "../Rating";

function ProductPage(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  const {
    image,
    name,
    rating,
    numreviews,
    price,
    description,
    countInStock,
  } = product;
  return (
    <div>
      <Link to="/">Continue Shopping</Link>
      <div className="row top">
        <div className="col-2">
          <img src={image} alt={name} className="large" />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h3>{name}</h3>
            </li>
            <li>
              <Rating rating={rating} numreviews={numreviews} />
            </li>
            <li>Price : {price} CHF</li>
            <li>
              Description: <p>{description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">{price} CHF</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {countInStock > 0 ? (
                      <span className="success">In stock </span>
                    ) : (
                      <span className="danger">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
