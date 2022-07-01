import React from 'react';
import { Link } from 'react-router-dom';

const SidebarAdmin = () => (
  <header>
    <nav id='sidebarMenu' className='collapse d-lg-block sidebar collapse bg-white'>
      <div className='position-sticky'>
        <div className='list-group list-group-flush mx-3 mt-4'>
          <Link to='/admin/dashboard' className='list-group-item list-group-item-action py-2 ripple' aria-current='true'>
            <i className='fab fa-product-hunt me-3'></i>
            <span>Products</span>
          </Link>

          <Link to='/admin/product/categories' className='list-group-item list-group-item-action py-2 ripple' aria-current='true'>
            <i className='fas fa-list-alt fa-fw me-3'></i>
            <span>Categories</span>
          </Link>

          <Link to='/admin/dashboard/orders' className='list-group-item list-group-item-action py-2 ripple'>
            <i className='fas fa-chart-bar fa-fw me-3'></i>
            <span>Orders</span>
          </Link>

          <Link to='/admin/users' className='list-group-item list-group-item-action py-2 ripple'>
            <i className='fas fa-users fa-fw me-3'></i>
            <span>Users</span>
          </Link>

          <Link to='#' className='list-group-item list-group-item-action py-2 ripple'>
            <i className='fas fa-chart-line fa-fw me-3'></i>
            <span>Analytics</span>
          </Link>
        </div>
      </div>
    </nav>
  </header>
);

export default SidebarAdmin;

// import styled from 'styled-components';
// import { Outlet, NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const AdminDashboard = () => {
//   const auth = true;
//   // const auth = useSelector((state) => state.auth);

//   // if (!auth.isAdmin) return <p>Access denied. Not an Admin!</p>;

//   return (
//     <StyledDashboard>
//       <SideNav>
//         <h3>Quick Links</h3>
//         <NavLink className={({ isActive }) => (isActive ? 'link-active' : 'link-inactive')} to='/admin/dashboard'>
//           Products
//         </NavLink>
//         <NavLink className={({ isActive }) => (isActive ? 'link-active' : 'link-inactive')} to='/admin/product/categories'>
//           Categories
//         </NavLink>
//         <NavLink className={({ isActive }) => (isActive ? 'link-active' : 'link-inactive')} to='/admin/product/orders'>
//           Orders
//         </NavLink>
//         <NavLink className={({ isActive }) => (isActive ? 'link-active' : 'link-inactive')} to='/admin/users'>
//           Users
//         </NavLink>
//         <NavLink className={({ isActive }) => (isActive ? 'link-active' : 'link-inactive')} to='/'>
//           Analytics
//         </NavLink>
//       </SideNav>
//       <Content>
//         <Outlet />
//       </Content>
//     </StyledDashboard>
//   );
// };

// export default AdminDashboard;

// const StyledDashboard = styled.div`
//   display: flex;
//   height: 100vh;
// `;

// const SideNav = styled.div`
//   border-right: 1px solid gray;
//   height: calc(100vh - 70px);
//   position: fixed;
//   overflow-y: auto;
//   width: 200px;
//   display: flex;
//   flex-direction: column;
//   padding: 2rem;
//   h3 {
//     margin: 0 0 1rem 0;
//     padding: 0;
//     text-transform: uppercase;
//     font-size: 17px;
//   }
//   a {
//     text-decoration: none;
//     margin-bottom: 1rem;
//     font-size: 14px;
//   }
// `;

// const Content = styled.div`
//   margin-left: 200px;
//   padding: 2rem 3rem;
//   width: 100%;
// `;

// // import React from 'react';
// // import {Link} from 'react-router-dom'

// // const SidebarAdmin = () => (
// //     <header>

// //     <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
// //         <div className="position-sticky">
// //             <div className="list-group list-group-flush mx-3 mt-4">
// //                 <Link to="/admin/dashboard" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
// //                     <i className="fab fa-product-hunt me-3"></i><span>Products</span>
// //                 </Link>

// //                 <Link to="/admin/product/categories" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
// //                     <i className="fas fa-list-alt fa-fw me-3"></i><span>Categories</span>
// //                 </Link>

// //                 <Link to="/admin/dashboard/orders" className="list-group-item list-group-item-action py-2 ripple"><i
// //                     className="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></Link>

// //                 <Link to="/admin/users" className="list-group-item list-group-item-action py-2 ripple"><i
// //                     className="fas fa-users fa-fw me-3"></i><span>Users</span></Link>

// //                 <Link to="#" className="list-group-item list-group-item-action py-2 ripple"><i
// //                     className="fas fa-chart-line fa-fw me-3"></i><span>Analytics</span></Link>

// //             </div>

// //         </div>
// //     </nav>

// // </header>
// // )

// // export default SidebarAdmin;
