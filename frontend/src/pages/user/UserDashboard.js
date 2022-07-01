import React, { useState, useEffect } from 'react';
// import Header from '../../component/Header'
// import Footer from '../../component/Footer'

const UserDashboard = () => {
  const [profile, setProfile] = useState('');
  const { name, email, role, createdAt } = profile;

  useEffect(() => {
    fetch('/api/getme')
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        //console.log(result)
        setProfile(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {/* <Header/> */}

      <div className='container-fluid dashboard_container'>
        <div className='row'>
          <div className='col-sm-4'>
            <div className='card card_dashboard'>
              <div className='card-header'>
                <b>User Dashboard</b>
              </div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'> Name: {name}</li>
                <li className='list-group-item'> E-mail: {email}</li>
                <li className='list-group-item'> Join at: {new Date(createdAt).toLocaleDateString()}</li>
                <li className='list-group-item'> {role === 1 ? 'Admin' : 'Registered User'}</li>
              </ul>
            </div>
          </div>
          <div className='col-sm-8'>
            <h4>other col</h4>
          </div>
        </div>
      </div>

      {/* <Footer/>     */}
    </>
  );
};

export default UserDashboard;

// // import styled from "styled-components";
// // import { Outlet, NavLink } from "react-router-dom";
// // import { useSelector } from "react-redux";

// import React, { useState, useEffect } from 'react';

// const UserDashboard = () => {
//   const [profile, setProfile] = useState('');
//   const { name, email } = profile;

//   useEffect(() => {
//     fetch('/api/getprofile')
//       .then((res) => {
//         return res.json();
//       })
//       .then((result) => {
//         // console.log(result)
//         setProfile(result.user);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>UserDashboard</h1>
//       <h1>{name}</h1>
//       <h1>{email}</h1>
//     </div>
//   );
// };

// export default UserDashboard;

// // const Dashboard = () => {
// //   const auth = useSelector((state) => state.auth);

// //   // if (!auth.isAdmin) return <p>Access denied. Not an Admin!</p>;

// //   return (
// //     <StyledDashboard>
// //       <SideNav>
// //         <h3>Quick Links</h3>
// //         <NavLink
// //           className={({ isActive }) =>
// //             isActive ? "link-active" : "link-inactive"
// //           }
// //           to="/admin/summary"
// //         >
// //           Summary
// //         </NavLink>
// //         <NavLink
// //           className={({ isActive }) =>
// //             isActive ? "link-active" : "link-inactive"
// //           }
// //           to="/admin/products"
// //         >
// //           Products
// //         </NavLink>
// //         <NavLink
// //           className={({ isActive }) =>
// //             isActive ? "link-active" : "link-inactive"
// //           }
// //           to="/admin/orders"
// //         >
// //           Orders
// //         </NavLink>
// //         <NavLink
// //           className={({ isActive }) =>
// //             isActive ? "link-active" : "link-inactive"
// //           }
// //           to="/admin/users"
// //         >
// //           Users
// //         </NavLink>
// //       </SideNav>
// //       <Content>
// //         <Outlet />
// //       </Content>
// //     </StyledDashboard>
// //   );
// // };

// // export default Dashboard;

// // const StyledDashboard = styled.div`
// //   display: flex;
// //   height: 100vh;
// // `;

// // const SideNav = styled.div`
// //   border-right: 1px solid gray;
// //   height: calc(100vh - 70px);
// //   position: fixed;
// //   overflow-y: auto;
// //   width: 200px;
// //   display: flex;
// //   flex-direction: column;
// //   padding: 2rem;
// //   h3 {
// //     margin: 0 0 1rem 0;
// //     padding: 0;
// //     text-transform: uppercase;
// //     font-size: 17px;
// //   }
// //   a {
// //     text-decoration: none;
// //     margin-bottom: 1rem;
// //     font-size: 14px;
// //   }
// // `;

// // const Content = styled.div`
// //   margin-left: 200px;
// //   padding: 2rem 3rem;
// //   width: 100%;
// // `;
