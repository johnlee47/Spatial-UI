import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,useParams , Navigate,Route, Routes } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


import Subscription from './component/Subscription';

import Reset from './component/reset/Reset';
import PrivateRoute from './PrivateRoute';
import PrivateRouteAdmin from './PrivateRouteAdmin';

import Menu from './component/Menu';
import Ipsearch from './component/pages/Ipsearch';
import Asign from './component/auth/Asign';
import Username from './component/pages/Username';
import Phone from './component/pages/Phone';

import Dashboard from './component/adminCompany/Dashboard'
const App = () => {
  return (
    <>
    <Router>
         <Routes>
                
                  
                   <Route exact path="/" element={<Asign/>} />
         
                   
          
                
                   



                   <Route path="/getting-started"element={
                            <PrivateRoute>
                                <Subscription />
                            </PrivateRoute>
                        }
                    />
                       <Route path="/menu"element={
                            <PrivateRoute>
                                <Menu />
                            </PrivateRoute>
                        }
                    />
                       <Route path="/ip-search"element={
                            <PrivateRoute>
                                <Ipsearch />
                            </PrivateRoute>
                        }
                    />
                     <Route path="/user-search"element={
                            <PrivateRoute>
                                <Username />
                            </PrivateRoute>
                        }
                    />
                      <Route path="/phone-search"element={
                            <PrivateRoute>
                                <Phone />
                            </PrivateRoute>
                        }
                    />
                      <Route path="/admin-dashboard"element={
                            <PrivateRouteAdmin>
                                <Dashboard />
                            </PrivateRouteAdmin>
                        }
                    />


                   <Route path="*" element={<Navigate to="/" />} />

                   <Route exact path="/reset/:userId/:token"  element={<Reset/>}/> 


                 
          </Routes>
    </Router> 
    <ToastContainer />
 
    </>
  );
}

export default App;
