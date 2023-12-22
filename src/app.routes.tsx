import AuthRoutes from "auth/auth.routes"
import HistoryRoutes from "history/history.routes"
import { PrivateRoute, PublicRoute } from "libs/suspended"
import ProductsRoutes from "products/products.routes"
import React, { FC } from "react"
import { Route, Routes } from "react-router-dom"

const CartPage = React.lazy(() => import('cart'));
const ProductsPage = React.lazy(() => import('products'));

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<PublicRoute element={ProductsPage} />} />
      <Route path='/products/*' element={<ProductsRoutes />} />
      <Route path='/cart' element={<PrivateRoute element={CartPage} />} />
      <Route path='*' element={<PublicRoute element={ProductsPage} />} />
      <Route path='/auth/*' element={<AuthRoutes />} />
      <Route path='/history/*' element={<HistoryRoutes />} />
    </Routes>
  )
}

export default AppRoutes