import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const PrivateRouteAdmin = ({ children }) => {
    return JSON.parse(localStorage.getItem('user'))?.result.role === 'systemAdmin' ? children : <Navigate to="/login" />;
  };
export default PrivateRouteAdmin;