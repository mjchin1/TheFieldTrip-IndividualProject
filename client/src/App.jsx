import './App.css'
import { useState } from 'react';
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Places from './components/Places';
import SinglePlace from './components/SinglePlace';
import Navigations from './components/Navigations';
import Register from './components/Register';
import Login from './components/Login';
import Favorites from './components/Favorites';
import LogoutButton from './components/LogoutButton';
import LogoutPage from './components/LogoutPage';
import Account from './components/Account';
import AddNewPlace from './components/AddNewPlace';

function App() {
  const [user, setUser] = useState({});
  const [favorites, setFavorites] = useState([]);
  return (
    <div className='app'>
      <span className='appHeading'>
      <h1 className="appTitle" >THE FIELD TRIP</h1>
      </span>
      <h2> A Directory of Chicago's most beautifully unique locations.</h2>
      <Navigations className="navBar" user = {user}/>
      {user.user_id? <LogoutButton className="logoutButton" user={user} setUser={setUser}/>: null}
       <div className='App'>
        <Routes>
          <Route path="/" element={<Places/>}/>
          <Route path="/places" element={<Places/>}/>
          <Route path="/places/:id" element={<SinglePlace userId={user.user_id}/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login user={user} setUser={setUser} />}/>
          <Route path="/logout" element={<LogoutPage/>}/>
          <Route path="/account" element={<Account user={user} favorites={favorites}/>}/>
          <Route path="/users/:id/favorites" element={<Favorites favorites={favorites} setFavorites = {setFavorites} user={user} />}/>
          <Route path="/new-place" element={<AddNewPlace/>}/>


        </Routes>
       </div>
    </div>
  );
};

export default App;