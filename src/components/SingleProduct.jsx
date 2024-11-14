import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {addProduct} from "../fetures/productsSlice"

function SingleProduct({
  id,
  brand,
  description,
  price,
  thumbnail,
  title,
  product,
}) {

  const dispatch = useDispatch()

  function handleBuyBtn(e){
    e.preventDefault();
    dispatch(addProduct({...product, amount:1}))
  }
  return (
    <Link to={`/products/${id}`} className="card bg-base-100 w-full shadow-xl group">
        <figure className="bg-black">
          <img
          className="h-auto scale-100 md:group-hover:scale-110 transition duration-300"
            src={thumbnail}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleBuyBtn}>Buy Now</button>
          </div>
        </div>
    </Link>
  );
}

export default SingleProduct;