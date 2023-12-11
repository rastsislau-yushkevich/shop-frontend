import ProductsRoutes from "products/products.routes"
import { FC } from "react"
import { Route, Routes } from "react-router-dom"



const AppRoutes: FC = () => {
  return(
    <Routes>
      <Route path='/' element={<div>Home</div>} />
      <Route path='/products' element={<ProductsRoutes />}/>
    </Routes>
  )
}

export default AppRoutes