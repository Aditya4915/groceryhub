import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import AddProducts from "./pages/AddProducts"
import CartDetails from "./pages/CartDetails"
import PageNotFound from "./pages/PageNotFound"

const App = () => 
  {
  return (
    <div>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/addproduct" element={<AddProducts/>}/>
          <Route path="/cart" element={<CartDetails/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Route>
      </Routes>

    </div>
  )
}

export default App
