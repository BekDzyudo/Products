import ProductContainer from "../components/ProductContainer";
import {request} from "../util/request"
export const loader = async()=>{
    const req = await request.get("/products")
    return req.data;
}

function Home() {
  return (
    <div className="align-elements mt-10">
        <ProductContainer/>
    </div>
  )
}

export default Home