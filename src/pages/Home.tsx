import ProductList from "../components/ProductList"
import SpecialOffers from "../components/SpecialOffers"


const Home = () => 
{
  return (
    <div className="flex flex-col gap-2 px-4 py-2">
      <SpecialOffers/>
      <ProductList/>
    </div>
  )
}

export default Home
