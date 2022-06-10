import { Routes, Route } from 'react-router-dom';
import LayoutRedux from './components/LayoutRedux';
import PublicRedux from './components/PublicRedux';
// import LoginRedux from './features/auth/LoginRedux';
import Login from './features/auth/Login';
import WelcomeRedux from './features/auth/WelcomeRedux';
import RequireAuthRedux from './features/auth/RequireAuthRedux';
import UsersReduxList from './features/users/UsersReduxList';

import LinkPage from './components/LinkPage'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutRedux/>}>
        {/* public rotues */}
        <Route index element={<PublicRedux />} />
        {/* <Route path='login' element={<LoginRedux />} /> */}
        <Route path='login' element={<Login/>} />
        <Route path='linkpage' element={<LinkPage/>} />


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

// ********** Do not delete Context Api app **********************
// import Register from './components/Register';
// import Login from './components/Login';
// import Home from './components/Home';
// import Layout from './components/Layout';
// import Editor from './components/Editor';
// import Admin from './components/Admin';
// import NoMatch from './components/NoMatch';
// import Unauthorized from './components/Unauthorized';
// import Lounge from './components/Lounge';
// import LinkPage from './components/LinkPage';
// import RequireAuth from './components/RequireAuth';
// import PersistLogin from './components/PersistLogin';
// import { Routes, Route } from 'react-router-dom';

// const ROLES = {
//   'User': 2001,
//   'Admin': 5150,
//   'Editor': 1984,
// }
// function App() {
//   return (
//     <Routes>
//       <Route path='/' element={<Layout />}>
//         {/* // public routes  */}
//         <Route path='login' element={<Login />} />
//         <Route path='register' element={<Register />} />
//         <Route path='linkpage' element={<LinkPage />} />
//         <Route path='unauthorized' element={<Unauthorized />} />

//         {/* // protected routers */}
//         <Route element={<PersistLogin/>}>
//         <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
//           <Route path='/' element={<Home />} />
//         </Route>

//         <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
//           <Route path='editor' element={<Editor />} />
//           <Route />

//           <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
//             <Route path='admin' element={<Admin />} />
//           </Route>

//           <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
//             <Route path='lounge' element={<Lounge />} />
//           </Route>
//         </Route>
//         </Route>

//         {/* No matches router */}
//         <Route path='*' element={<NoMatch />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;
