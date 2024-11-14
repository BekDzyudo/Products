import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementAmount, decrementAmount, removeProduct} from "../fetures/productsSlice";

function CartItem({product}) {
    const {brand, title, amount, description, thumbnail, id} = product
    const dispatch = useDispatch()
    
    
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={thumbnail}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">
                <span>Brand:</span> {brand}
            </div>
          </div>
        </div>
      </td>
      <td>
        {description}
      </td>
      <td>
        <div className="flex items-center gap-3">
            <button onClick={()=>dispatch(incrementAmount(id))} className="btn btn-sm text-lg">+</button>
            <span className="font-semibold text-lg">{amount}</span>
            <button onClick={()=>{
              if(amount == 1){
                dispatch(removeProduct(id))
              }
              else{
                dispatch(decrementAmount(id))
              }
            }} className="btn btn-sm text-lg">-</button>
        </div>
        </td>
      <th>
        <button onClick={()=>dispatch(removeProduct(id))} className="btn btn-secondary btn-xs">delete</button>
      </th>
    </tr>
  );
}

export default CartItem;
