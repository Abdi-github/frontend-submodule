import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../../actions/productActions";
// import { data } from "../../data";
import Loading from "../Loading";
import Message from "../Message";
import Rating from "../Rating";

function ProductPage(props) {
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;
  const dispatch = useDispatch();
  const productId = props.match.params.id;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Link to="/">Continue Shopping</Link>
          <div className="row top">
            <div className="col-2">
              <img src={product.image} alt={product.name} className="large" />
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h3>{product.name}</h3>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numreviews={product.numreviews}
                  />
                </li>
                <li>Price : {product.price} CHF</li>
                <li>
                  Description: <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">{product.price} CHF</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
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
      )}
    </div>
  );
}

export default ProductPage;
