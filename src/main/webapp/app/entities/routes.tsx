import React from 'react';
import { Route } from 'react-router-dom';
//import registerReducer from 'app/modules/account/register/register.reducer';
import Studentregister from './studentregister';
import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
        {/* <Route path="/" element={< />}> */}
        {/* //<Route index element={<Home />} /> */}
        <Route path="studentregister" element={<Studentregister />} />
        {/* <Route path="logout" element={<Logout />} />
        <Route path="account">
          <Route
            path="*"
            element={
              <PrivateRoute hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER]}>
                <Account />
              </PrivateRoute>
            }
          />
          <Route path="register" element={<Register />} />
          <Route path="activate" element={<Activate />} />
          <Route path="reset">
            <Route path="request" element={<PasswordResetInit />} />
            <Route path="finish" element={<PasswordResetFinish />} />
          </Route>
        </Route> */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
