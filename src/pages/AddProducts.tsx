import { useDispatch } from "react-redux";
import { type AppDispatch } from "../redux/store";
import { addProduct } from "../features/productSlice";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

interface ProductType { name:string, weight:string, MRP:number|string , discount:number | string , price:number | string }

const AddProducts = () => 
{
  const navigate=useNavigate()
  const dispatch=useDispatch<AppDispatch>();
  const [product, setProduct]=useState<ProductType>({name:"", weight:"", MRP:"", discount:"", price:""})

  const handlesubmit=(e:React.SubmitEvent<HTMLFormElement>)=>
  {
      e.preventDefault()
      dispatch(addProduct({name:product.name, weight:product.weight, MRP:Number(product.MRP), discount:Number(product.discount), price:Number(product.price)}))
      navigate("/")
  }

  return (
    <div className="min-h-screen flex  justify-center bg-gray-50 px-4 py-8">

      <div className="w-full max-w-xl rounded-lg bg-white p-6 shadow-2xl sm:p-8">

        <h1 className="mb-6 text-center text-xl font-semibold">
          Add Product
        </h1>

        <form className="flex flex-col gap-4"
        onSubmit={handlesubmit}>

          <input
            type="text"
            placeholder="Product Name"
            className="w-full rounded-md border p-2 "
            value={product.name}
            onChange={(e)=>setProduct({...product, name:e.target.value})}
          />

          <input
            type="text"
            placeholder="Product Weight"
            className="w-full rounded-md border p-2 "
            value={product.weight}
            onChange={(e)=>setProduct({...product, weight:e.target.value})}
          />

          <input
            type="number"
            placeholder="Product MRP"
            className="w-full rounded-md border p-2 "
            value={product.MRP}
            onChange={(e)=>setProduct({...product, MRP:e.target.value})}
          />

          <input
            type="number"
            placeholder="Product Discount"
            className="w-full rounded-md border p-2 "
            value={product.discount}
            onChange={(e)=>setProduct({...product, discount:e.target.value})}
          />

          <input
            type="number"
            placeholder="Product Price"
            className="w-full rounded-md border p-2 "
            value={product.price}
            onChange={(e)=>setProduct({...product, price:e.target.value})}
          />

          <button
            type="submit"
            className="mt-2 w-full rounded-md bg-indigo-500 py-2 text-white hover:bg-indigo-600"
            >
            Add Product
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddProducts;