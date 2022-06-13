import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../features/auth/authSlice';
import { selectCurrentUser } from '../features/auth/authSlice';
// import { faTowerBroadcast } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';

function Header() {
  const user = useSelector(selectCurrentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logOut());
    toast.success('user logged out just fine');
    navigate('/login');
  };

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>MOD^P</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className='btn' onClick={() => logoutHandler()}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
