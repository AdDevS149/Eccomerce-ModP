import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu'

// import Footer from '../pages/Footer';

const Layout = () => {
  return (
    <>
      {/* <Menu/> */}
  
      <main className='App'>
        <Outlet />
      </main>
      {/* <Footer/> */}
    </>
  );
};

export default Layout;
