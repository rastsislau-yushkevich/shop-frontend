// import ProductsPage from "products"
import { Suspended } from "libs/suspended"
import React, { FC } from "react"
import { Route, Routes } from "react-router-dom"

const ProductsPage = React.lazy(() => import('products'))

const ProductsRoutes: FC = () => {
  return(
    <Routes>
      <Route path='/' element={<Suspended WrappedComponent={ProductsPage} />} />
    </Routes>
  )
}

export default ProductsRoutes