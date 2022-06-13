import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import Login from './features/auth/Login';
import Register from './features/register/register';
import Welcome from './features/auth/Welcome';
import RequireAuth from './features/auth/RequireAuth';
import Header from './components/Header';

import UsersList from './features/users/UsersList';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* public rotues */}
          <Route index element={<HomePage />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />

          {/* protect routes */}
          <Route element={<RequireAuth />}>
            <Route path='welcome' element={<Welcome />} />
            <Route path='usersList' element={<UsersList />} />
          </Route>
        </Route>
      </Routes>
    </div>
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
