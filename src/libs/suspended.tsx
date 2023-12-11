import React, { FC, Suspense } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute: FC<any> = ({ WrappedComponent, auth }) => {
  return auth ? (
    <Suspense fallback={<p>Unauthorized</p>}>
      <WrappedComponent />
    </Suspense>
  ) : (
    <Navigate to={'/sign-in'} />
  )
}

export const PublicRoute: FC<any> = ({ WrappedComponent }) => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <WrappedComponent />
    </Suspense>
  )
}

export const Suspended: FC<any> = ({ WrappedComponent }) => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <WrappedComponent />
    </Suspense>
  )
}