// import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
// import { faTowerBroadcast } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { logOut } from '../features/auth/authSlice';
import { selectCurrentUser } from '../features/auth/authSlice';

import { toast } from 'react-toastify';

import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Badge } from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { mobile } from '../responsive';


const Container = styled.div`
  height: 60px;
  ${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '16px' })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

// const quantity = useSelector((state) => state.cart.quantity);

// console.log(quantity);

// // console.log('quantity', quantity)

// };

const NavBar = () => {
  // const { cartTotalQuantity } = useSelector((state) => state.cart);
    const user = useSelector(selectCurrentUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
      dispatch(logOut());
      toast.success('user logged out just fine');
      navigate('/login');
    };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            <SearchOutlinedIcon style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <NavLink to='/'>
            <Logo>MOD^P</Logo>
          </NavLink>
        </Center>
        <Right>
          {user ? (
          <button onClick={() => logoutHandler()}>
              <MenuItem>LOGOUT</MenuItem>
            </button>
          ) : (
          <>
          <NavLink to='/register'>
                <MenuItem>REGISTER</MenuItem>
              </NavLink>

          <NavLink to='/login'>
                <MenuItem>SIGN IN</MenuItem>
              </NavLink>

          <NavLink to='/cart'>
            <MenuItem>
              {/* <Badge badgeContent={cartTotalQuantity} color='primary'> */}
                <Badge color='primary'>
                <LocalMallOutlinedIcon />
              </Badge>
            </MenuItem>
          </NavLink>
          </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );

};

export default NavBar;
