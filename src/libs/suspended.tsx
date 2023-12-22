import { FC, Suspense } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute: FC<{element: any}> = ({ element: Element }) => {
  const user = localStorage.getItem('currentUser');
  return user ? (
    <Suspense fallback={<p>Unauthorized</p>}>
      <Element />
    </Suspense>
  ) : (
    <Navigate to={'/auth/sign-in'} />
  )
}

export const PublicRoute: FC<{ element: any }> = ({ element: Element }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Element />
    </Suspense>
  )
}

export const Suspended: FC<any> = ({ WrappedComponent }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WrappedComponent />
    </Suspense>
  )
}