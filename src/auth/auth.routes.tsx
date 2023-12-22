import React, { FC } from "react"
import { Route, Routes } from "react-router-dom"
import { PublicRoute } from "libs/suspended"

const SignInPage = React.lazy(() => import('auth/signin.page'))
const SignUpPage = React.lazy(() => import('auth/signup.page'))

const AuthRoutes: FC = () => {
  return(
    <Routes>
      <Route path='/sign-in' element={<PublicRoute element={SignInPage} />}/>
      <Route path='/sign-up' element={<PublicRoute element={SignUpPage} />}/>
    </Routes>
  )
}

export default AuthRoutes