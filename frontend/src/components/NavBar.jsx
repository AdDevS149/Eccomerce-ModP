import { Link, useNavigate} from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logoutUser } from '../features/auth/authSlice';
import styled from 'styled-components';
import axios from 'axios'
import { toast } from 'react-toastify'


const NavBar = () => {

  // const { cartTotalQuantity } = useSelector((state) => state.cart);
  // const auth = useSelector((state) => state.auth); 
  // const dispatch = useDispatch();
  const navigate = useNavigate();


  // const logoutHandler = () => {
  //   dispatch(logoutUser(null));
  //   toast.warning("Logged Out", {position: 'bottom-right'})
  //   navigate('/');
  // };

  const logout = () => {
axios.get('/api/logout').then(result => {
  toast.success("Log out successful")
  localStorage.removeItem('token')
  navigate('/')
})
.catch(error => {
  console.log(error)
})
  }

  return (
    <nav className='nav-bar'>
      <Link to='/'>
        <h2>MOD^P</h2>
      </Link>


      <Link to='/cart'>
        <div className='nav-bag'>
          <svg xmlns='http://www.w3.org/2000/svg' width='35' height='35' fill='currentColor' className='bi bi-handbag-fill' viewBox='0 0 16 16'>
            <path d='M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z' />
          </svg>
          <span className='bag-quantity'>
            {/* <span>{cartTotalQuantity}</span> */}
          </span>
        </div>
      </Link>

      {/* {auth._id ? ( */}
        <Links> 
        <div>
          <Link to="/user/dashboard">Admin</Link>
        </div>
        {/* <div onClick={logoutHandler}>
        LogOut
        </div> */}
        </Links>
      {/* ) : ( */}
        <AuthLinks>
          <Link to='/signin'>Sign In</Link>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/signup' onClick={logout}>Logout</Link>
        </AuthLinks>
      {/* )} */}
    </nav>
  );
};

export default NavBar;

const AuthLinks = styled.div`
a{
  &:last-child{
    margin-left: 2rem;
  }
}`;

const Links = styled.div`
  color: white;
  display: flex;

  div {

cursor: pointer;    
&:last-child {
  margin-left: 2rem;
}
  }
  
`;

// import { Link } from 'react-router-dom';

// const NavBar = () => {
//   return (
//     <header className='Header'>
//       <h1>MOD^P</h1>
//       <nav>
//         <ul>
//           <li>
//             <Link to='/'>Home</Link>
//           </li>
//           <li>
//             <Link to='product'>Post</Link>
//           </li>
//           <li>
//             <Link to='user'>Users</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default NavBar;

// // // // import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
// // // // import { faTowerBroadcast } from '@fortawesome/free-solid-svg-icons'
// // import React from 'react';
// // import { useNavigate, NavLink } from 'react-router-dom';
// // // import { useDispatch, useSelector} from 'react-redux';
// // // import { logOut } from '../features/auth/authSlice';
// // // import { selectCurrentUser } from '../features/auth/authSlice';

// // import { toast } from 'react-toastify';

// // import styled from 'styled-components';
// // import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// // import { Badge } from '@mui/material';
// // import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
// // import { mobile } from '../responsive';

// // const Container = styled.div`
// //   height: 60px;
// //   ${mobile({ height: '50px' })}
// // `;

// // const Wrapper = styled.div`
// //   padding: 10px 20px;
// //   display: flex;
// //   align-items: center;
// //   justify-content: space-between;
// //   ${mobile({ padding: '10px 0px' })}
// // `;

// // const Left = styled.div`
// //   flex: 1;
// //   display: flex;
// //   align-items: center;
// // `;

// // const Language = styled.span`
// //   font-size: 14px;
// //   cursor: pointer;
// //   ${mobile({ display: 'none' })}
// // `;

// // const SearchContainer = styled.div`
// //   border: 0.5px solid lightgray;
// //   display: flex;
// //   align-items: center;
// //   margin-left: 25px;
// //   padding: 5px;
// // `;

// // const Input = styled.input`
// //   border: none;
// //   ${mobile({ width: '50px' })}
// // `;

// // const Center = styled.div`
// //   flex: 1;
// //   text-align: center;
// // `;

// // const Logo = styled.h1`
// //   font-weight: bold;
// //   ${mobile({ fontSize: '16px' })}
// // `;
// // const Right = styled.div`
// //   flex: 1;
// //   display: flex;
// //   align-items: center;
// //   justify-content: flex-end;
// //   ${mobile({ flex: 2, justifyContent: 'center' })}
// // `;

// // const MenuItem = styled.div`
// //   font-size: 16px;
// //   cursor: pointer;
// //   margin-left: 25px;
// //   ${mobile({ fontSize: '12px', marginLeft: '10px' })}
// // `;

// // // // const quantity = useSelector((state) => state.cart.quantity);

// // // // console.log(quantity);

// // // // // console.log('quantity', quantity)

// // // // };

// // const NavBar = () => {
// //   // const { cartTotalQuantity } = useSelector((state) => state.cart);
// //   // const user = useSelector(selectCurrentUser);

// //   // const dispatch = useDispatch();
// //   // const navigate = useNavigate();
// //   // const logoutHandler = () => {
// //   //   dispatch(logOut());
// //   //   toast.success('user logged out just fine');
// //   //   navigate('/login');
// //   // };

// //   return (
// //     <Container>
// //       <Wrapper>
// //         <Left>
// //           <Language>EN</Language>
// //           <SearchContainer>
// //             <Input placeholder='Search' />
// //             <SearchOutlinedIcon style={{ color: 'gray', fontSize: 16 }} />
// //           </SearchContainer>
// //         </Left>
// //         <Center>
// //           <NavLink to='/'>
// //             <Logo>MOD^P</Logo>
// //           </NavLink>
// //         </Center>
// //         <Right>
// //           {/* {user ? ( */}
// //           {/* <button onClick={() => logoutHandler()}>
// //               <MenuItem>LOGOUT</MenuItem>
// //             </button> */}
// //           {/* ) : ( */}
// //           {/* <> */}
// //           {/* <NavLink to='/register'>
// //             <MenuItem>REGISTER</MenuItem>
// //           </NavLink> */}

// //           {/* <NavLink to='/login'>
// //             <MenuItem>SIGN IN</MenuItem>
// //           </NavLink> */}

// //           <NavLink to='/product'>
// //             <MenuItem>Products</MenuItem>
// //           </NavLink>

// //           {/* <NavLink to='/user'>
// //             <MenuItem>User</MenuItem>
// //           </NavLink> */}

// //           <NavLink to='/cart'>
// //             <MenuItem>
// //               {/* <Badge badgeContent={cartTotalQuantity} color='primary'> */}
// //               <Badge color='primary'>
// //                 <LocalMallOutlinedIcon />
// //               </Badge>
// //             </MenuItem>
// //           </NavLink>
// //           {/* </> */}
// //           {/* )} */}
// //         </Right>
// //       </Wrapper>
// //     </Container>
// //   );
// // };

// // export default NavBar;
