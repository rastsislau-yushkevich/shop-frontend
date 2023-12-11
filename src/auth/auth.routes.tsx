import React, { FC } from "react"
import { Route, Routes } from "react-router-dom"
import { Suspended } from "libs/suspended"

const SignInPage = React.lazy(() => import('auth/signin.page'))
const SignUpPage = React.lazy(() => import('auth/signup.page'))

const AuthRoutes: FC = () => {
  return(
    <Routes>
      <Route path='/sign-in' element={<Suspended WrappedComponent={SignInPage} />}/>
      <Route path='/sign-up' element={<Suspended WrappedComponent={SignUpPage} />}/>
    </Routes>
  )
}

export default AuthRoutes