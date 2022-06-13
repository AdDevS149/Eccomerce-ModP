import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className='App'>
      {/* // Outlet reps all the children nested inside from the routes in app */}
      <Outlet />
    </main>
  );
};

export default Layout;
