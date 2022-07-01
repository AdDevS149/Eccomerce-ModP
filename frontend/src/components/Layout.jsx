import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
// import Menu from './Menu'
import Footer from '../pages/Footer';

const Layout = () => {
    return (
        <>
        {/* <Menu/> */}
            <NavBar />
           
            <main className="App">
            
                <Outlet />
            </main>
             <Footer/>
        </>
    )
}

export default Layout





