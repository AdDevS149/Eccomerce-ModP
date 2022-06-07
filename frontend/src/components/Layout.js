import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className='App'>

    {/* // Outlet reps all the children nested inside */}
      <Outlet />
    </main>
  );
};

export default Layout;
