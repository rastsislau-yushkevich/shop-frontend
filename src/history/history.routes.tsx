import { PrivateRoute } from "libs/suspended"
import React from "react"
import { Route, Routes } from "react-router-dom"

const HistoryPage = React.lazy(() => import('history'))

const HistoryRoutes = () => {
  return(
    <Routes>
      <Route path="*" element={<PrivateRoute element={HistoryPage}/>}/>
    </Routes>
  )
}

export default HistoryRoutes