import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { calculateBill } from "../features/offerCalculate";

const BillSummary = () => 
{
    const cartItems=useSelector((state:RootState)=>state.cart.items)
    const {subTotal, totalSavings, totalAmount}=calculateBill(cartItems)

  return (
    <div className="w-1/2 h-1/3 gap-4 rounded-lg flex flex-col items-center">
      
      <div className="w-full h-32 py-3 px-10  flex flex-col border rounded-lg">
        
            <h1 className="font-bold">Bill Details</h1>
            <div className="flex justify-between">
                <h1>Sub Total:</h1>
                <p>£ {subTotal}</p>
            </div>

            <div className="text-green-500 flex justify-between">
                <h1>Savings :</h1>
                <p>- £ {totalSavings}</p>
            </div>
            <hr></hr>
            <div className="font-semibold flex justify-between">
                <h1 className="">Total Amount:</h1>
                <p>£ {totalAmount}</p>
            </div>
 
      </div>
      
      <button className="w-[80%] h-8 text-white bg-green-500 hover:bg-green-600 rounded-lg">
            Click To Pay £ {totalAmount}
      </button>
    
    </div>
  )
}

export default BillSummary;
