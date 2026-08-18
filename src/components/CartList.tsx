import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "../redux/store"
import { decreaseQuantity, increaseQuantity } from "../features/cartSlice"
import { calculateBill } from "../features/offerCalculate"

const CartList = () => 
{
    const dispatch=useDispatch<AppDispatch>()
    const cartItems=useSelector((state:RootState)=>state.cart.items)
    const {offers}=calculateBill(cartItems)

    const getSaving=(name:string)=>
    {
        const item=offers.find((offer)=>offer.name.toLocaleLowerCase()===name.toLocaleLowerCase())
        if(item && item.saving>0)
        {
            return item.saving
        }
        else
        {
            return 0
        }
    }


  return (
    <div className="w-1/2 h-1/2 px-6 shadow-xl rounded-lg flex flex-col items-center overflow-scroll scrollbar-none">
        <h1 className="text-2xl font-semibold mb-3">Cart</h1>
        

        {
            cartItems.length===0 ? (<p>cart is empty</p>):(
            
                cartItems.map((item)=>
            (
                <div className="w-full h-16 mb-2 border rounded-lg flex"
                key={item.id}>
            
                    <div className="w-1/3 p-2 gap-2 flex items-center ">
                        
                        <img src="img.jpg" alt="No image" className="h-12 w-12 bg-indigo-200"/>

                        <div className="flex gap-4">
                            <div className="">
                                <h1 className="font-bold">{item.name}</h1>
                                <p className="text-sm font-semibold">£{item.price}</p> 
                            </div>
  


                        </div>
                    </div>
        

                    <div className="w-2/3 p-3 flex gap-6 items-center justify-end">

                        <div className=" flex flex-col text-xs ">
                            <div className="flex gap-1 justify-between ">
                                <p>£ {item.price} x {item.quantity} </p> 
                                <p>= £{item.price*item.quantity}</p> 
                            </div>
                            {
                                getSaving(item.name)===0 ? (<></>):(<p className=" text-red-500 font-semibold">Savings £{getSaving(item.name)}</p>)
                            } 
                            <p className="font-semibold">Item cost £ {(item.price*item.quantity)-getSaving(item.name)}</p> 

                        </div>
                        
                        <div className="p-2 border rounded-sm border-green-300 bg-green-50 flex">
                            
                            <button 
                                className="bg-green-500 w-6 h-6 text-white rounded-sm hover:bg-green-600"
                                onClick={()=>dispatch(decreaseQuantity(item.id))}>
                            -  
                            </button>
                            
                            <p className="w-8 h-6 text-black flex justify-center items-center">
                                {item.quantity}
                            </p>

                            <button 
                                className="bg-green-500 w-6 h-6 text-white rounded-sm hover:bg-green-600"
                                onClick={()=>dispatch(increaseQuantity(item.id))}>
                                +
                            </button>
                        </div>
                    </div>

                </div>
            )))
        }
    </div>
  )
}

export default CartList
