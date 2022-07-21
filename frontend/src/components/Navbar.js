import React from 'react';
import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Badge } from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { mobile } from '../responsive';
import { useSelector, useDispatch} from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import {logoutUser} from '../slices/authSlice'

const Navbar = () => {
  const {cartTotalQuantity} = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // console.log(quantity);

  // console.log('quantity', quantity)
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
          <NavLink to='/admin/summary'>
            <MenuItem>Admin</MenuItem>
          </NavLink>
          <NavLink to='/public/register'>
            <MenuItem>Register</MenuItem>
          </NavLink>

          <NavLink to='/public/login'>
            <MenuItem>Sign In</MenuItem>
          </NavLink>
          <Link to='/cart'>
            <MenuItem>
              <Badge badgeContent={cartTotalQuantity} color='primary'>
                <LocalMallOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
          <NavLink to='/' onClick={() => {dispatch(logoutUser(null))}}>
            <MenuItem>Logout</MenuItem>
          </NavLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

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
  ${mobile({ fontSize: '24px' })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

export default Navbar;
