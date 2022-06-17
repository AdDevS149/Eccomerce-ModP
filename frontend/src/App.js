
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import Login from './features/auth/Login';
import Cart from './components/Cart';
import RequireAuth from './features/auth/RequireAuth';
import UsersList from './features/users/UsersList';
import Welcome from './features/auth/Welcome';
import NoMatch from './components/NoMatch';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* public routes */}
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />

          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route path='welcome' element={<Welcome />} />
            <Route path='/userslist' element={<UsersList />} />
          </Route>
          {/* No match route */}
          <Route path='/*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;


