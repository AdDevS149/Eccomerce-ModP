import { Outlet } from 'react-router-dom';
// import Product from './Details/Product';

// import Home from './Home';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* <Product/> */}
    

      <Outlet />
    </>
  );
};

export default Layout;
