import { useNavigate } from "react-router-dom"


const PageNotFound = () => 
  {
    const navigate=useNavigate()

  return (
    <div className="w-full min-h-screen gap-4 flex flex-col justify-center items-center">
        <h1 className="text-8xl font-bold text-violet-600">404</h1>
        <p className="text-2xl font-semibold">oops! Page Not Found</p>

        <button 
          className="p-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700"
          onClick={()=>navigate("/")}>
          🏠Home
        </button>
        
    </div>
  )
}

export default PageNotFound
