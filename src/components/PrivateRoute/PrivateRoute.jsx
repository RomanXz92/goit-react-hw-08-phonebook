import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selecors';

function PrivateRoute({ children, redirectTo = '/' }) {
  const isLoggedIn = useSelector(state => getIsLoggedIn(state));

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}

PrivateRoute.prototype = {
  children: propTypes.element,
  redirectTo: propTypes.string,
};

export default PrivateRoute;
