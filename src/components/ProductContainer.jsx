import { useLoaderData } from "react-router-dom"
import SingleProduct from "./SingleProduct";

function ProductContainer() {
    const data = useLoaderData()
    
  return (
    <>
        <h2 className="font-bold text-3xl">All Products:</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {
            data.products.map((product)=>{
                const {id, brand, description, price, thumbnail, title} = product
                return <SingleProduct key={id} product={product} id={id} brand={brand} description={description} price={price} thumbnail={thumbnail} title={title}/>
            })
        }
    </div>
    </>
  )
}

export default ProductContainer