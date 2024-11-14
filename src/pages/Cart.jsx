import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

function Cart() {
  const {products} = useSelector((state)=>state.products)
  
  
  return (
    <div className="align-elements">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Product name:</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((prod)=> <CartItem key={prod.id} product={prod}/>)
            }
          </tbody>
          {/* foot */}
          {/* <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot> */}
        </table>
      </div>
    </div>
  );
}

export default Cart;
