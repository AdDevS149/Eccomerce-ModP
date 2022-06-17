// import { useState, useEffect } from 'react';
// import useAxiosPrivate from '../hooks/useAxiosPrivate';
// import { useNavigate, useLocation } from 'react-router-dom';
// // import axios from '../api/axios'

// const Users = () => {
//   const [users, setUsers] = useState();
//   const axiosPrivate = useAxiosPrivate();
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {

//     // to cancel request if component unmounts
//     const controller = new AbortController();

//     const getUsers = async () => {
//       try {
//         const response = await axiosPrivate.get('/users', {
//            signal: controller.signal,
//         });

//         const userNames = response.data.map((user) => user.username);
//         // console.log(response.data);
//         setUsers(userNames);
//       } catch (err) {
//         console.error(err);

//         navigate('/login', { state: { from: location }, replace: true });
//       }
//     };

//     getUsers();

//     return () => {
    
//       controller.abort();
//     };
//   }, []);

//   return (
//     <article>
//       <h2>Users List</h2>
//       {users?.length ? (
//         <ul>
//           {users.map((user, i) => (
//             <li key={i}>{user}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No users to display</p>
//       )}
//     </article>
//   );
// };

// export default Users;
