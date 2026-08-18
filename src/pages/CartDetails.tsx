import BillSummary from "../components/BillSummary"
import CartList from "../components/CartList"

const CartDetail = () => {
  return (
    <div className="h-screen w-full gap-4 py-4 flex flex-col items-center">
      <CartList/>
      <BillSummary/>
    </div>
  )
}

export default CartDetail
