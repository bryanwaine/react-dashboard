import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import UserList from "./pages/userList/UserList";
import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Referrals from "./pages/referrals/Referrals";
import ActiveUser from "./pages/activeUser/ActiveUser";
import Country from "./pages/country/Country";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/users' element={ <UserList /> }/>
          <Route path='/users/:userId' element={ <User /> }/>
          <Route path='/newUsers' element={ <NewUser /> }/>
          <Route path='/referrals' element={ <Referrals /> }/>
          <Route path='/activeUsers' element={ <ActiveUser /> }/>
          <Route path='/countries/:country' element={ <Country /> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
