import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import type { RootState } from "../redux/store";

const Header = () => 
{
  const navigate = useNavigate();
  const cartItems=useSelector((state:RootState)=>state.cart.items)

  return (
    <header className="bg-violet-600 text-white shadow-md">
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span >🛒</span>
          <Link to="/">GroceryHub</Link>
        </div>

        {/* Search */}
        <div className="flex w-full max-w-md">
          <input
            type="text"
            placeholder="Eg. Apple, Bananas, Sugar..."
            className="w-full rounded-l-lg px-4 py-2 bg-white text-black focus:outline-none"
          />
          <button className="rounded-r-lg bg-violet-950 px-4 py-2 hover:bg-violet-900">
            Search
          </button>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-5">
          <Link to="/">Home</Link>
          <Link to="/addproduct">Add Product</Link>
          <Link to="/login">Login</Link>

          <button
            onClick={() => navigate("/cart")}
            className="relative rounded-md bg-green-500 px-4 py-2 hover:bg-green-600">
            Cart
              {
                cartItems.length===0 ? (<></>):(
                  <span className="absolute bottom-7 left-12 bg-red-500 rounded-full h-4 w-4 text-xs">{cartItems.length}</span>
                )
              }
          </button>
          
        </div>

      </div>
    </header>
  );
};

export default Header;
