import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const PrivateRoute = ({ children }) => {
    return JSON.parse(localStorage.getItem('user'))?.result.role === 'client' ? children : <Navigate to="/login" />;
  };
export default PrivateRoute;