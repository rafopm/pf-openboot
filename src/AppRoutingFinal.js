import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Loginpage from './pages/auth/LoginPage';
import Dashboardpage from './pages/dashboard/DashBoard';
import Notfoundpage from './pages/404/NotFoundPage';


function AppRoutingFinal() {

  // TODO: Change to value from sessionStorage (or something dinamic)
  let loggedIn = true;

  return (
    <Router>
      {/* Route Switch */}
      <Routes>
        {/* Redirections to protect our routes */}
        <Route exact path='/'>
          {
           loggedIn ? 
           (<Navigate from='/' to='/dashboard' />)
           :
           (<Navigate from='/' to='/login' /> )
          }
        </Route>
        {/* Login Route */}
        <Route exact path='/login' component={Loginpage} />  
        {/* DashBoard Route */}
        <Route exact path='/dashboard'>
          {
           loggedIn ? 
           (<Dashboardpage />)
           :
           (<Navigate from='/' to='/login' /> )
          }
        </Route>
        <Route component={Notfoundpage}/>
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;
