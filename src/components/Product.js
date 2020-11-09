import React from "react";
import Rating from "./Rating";

function Product({ product }) {
  const { _id, name, image, price, rating, numReviews } = product;
  return (
    <div className="card">
      <a href={`/product/${_id}`}>
        <img className="medium" src={image} alt={name} />
      </a>
      <div className="card-body">
        <a href={`/product/${_id}`}>
          <h2>{name}</h2>
        </a>
        <Rating rating={rating} numReviews={numReviews} />

        <div className="price">{price} CHF</div>
      </div>
    </div>
  );
}

export default Product;
