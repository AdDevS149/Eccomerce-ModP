import { Outlet } from 'react-router-dom';
import Navbar from './NavBar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className='App'>
      
        {/* // Outlet reps all the children nested inside from the routes in app */}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
