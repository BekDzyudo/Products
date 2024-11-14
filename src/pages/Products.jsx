import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { request } from "../util/request";
import { incrementAmount, decrementAmount, removeProduct, addProduct } from "../fetures/productsSlice";

export const loader = async ({ params }) => {
  const req = await request.get(`/products/${params.id}`);
  return req.data;
};

function Products() {
  const data = useLoaderData();
  const dispatch = useDispatch();
  const {products} = useSelector((state)=>state.products)

  const alreadyAdded = products.find((prod)=>prod.id === data.id);

  if(!alreadyAdded){
    dispatch(addProduct({...data, amount:0}))
  }
  
  return (
    <div className="align-elements flex gap-10 mt-5">
      <div className="border rounded group p-3">
        <img
          className="h-auto w-full scale-100 group-hover:scale-110 transition duration-300"
          src={data.thumbnail}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <h2 className="font-medium text-lg">Title:</h2>
          <p>{data.title}</p>
        </div>
        <div>
          <h2 className="font-medium text-lg">Brand:</h2>
          <p>{data.brand}</p>
        </div>
        <div>
          <h2 className="font-medium text-lg">Category:</h2>
          <p>{data.category}</p>
        </div>
        <div>
          <h2 className="font-medium text-lg">Price:</h2>
          <p>{data.price}</p>
        </div>
        <div>
          <h2 className="font-medium text-lg">Rating:</h2>
          <p>{data.rating}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-center">
        <div className="flex items-center gap-3">
          <button
            onClick={() => dispatch(incrementAmount(data.id))}
            className="btn btn-sm text-lg"
          >
            +
          </button>
          <span className="font-semibold text-lg">{alreadyAdded.amount}</span>
          <button
            onClick={() => {
              if (alreadyAdded.amount > 0) {
                dispatch(decrementAmount(data.id));
              }
            }}
            className="btn btn-sm text-lg"
          >
            -
          </button>
        </div>
        <button onClick={()=>dispatch(removeProduct(data.id))} className="btn btn-secondary">delete</button>
      </div>
    </div>
  );
}

export default Products;
