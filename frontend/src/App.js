import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PublicRedux from './components/PublicRedux';
import Login from './features/auth/Login';
import WelcomeRedux from './features/auth/WelcomeRedux';
import RequireAuthRedux from './features/auth/RequireAuthRedux';
import UsersReduxList from './features/users/UsersReduxList';

import LinkPage from './components/LinkPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* public rotues */}
        <Route index element={<PublicRedux />} />
        {/* <Route path='login' element={<LoginRedux />} /> */}
        <Route path='login' elemenzt={<Login />} />
        <Route path='linkpage' element={<LinkPage />} />

        {/* protect routes */}
        <Route element={<RequireAuthRedux />}>
          <Route path='welcome' element={<WelcomeRedux />} />
          <Route path='usersList' element={<UsersReduxList />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
