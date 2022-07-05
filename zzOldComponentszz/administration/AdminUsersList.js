import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import SidebarAdmin from './SidebarAdmin';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'antd/dist/antd.min.css';
import { Pagination } from 'antd';

const AdminUsersList = () => {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalItem, setTotalItem] = useState(0);
  //console.log("users state", users);

  const loadUsers = () => {
    axios
      .get(`/api/allusers?pageNumber=${pageNumber}`)
      .then((res) => {
        console.log('users', res.data.users);
        if (res) {
          setUsers(res.data.users);
          setTotalItem(res.data.count);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    loadUsers();
  }, [pageNumber]);

  //Deleting an user
  const deleteUser = (id, name) => {
    if (window.confirm(`Do you want to delete User: ${name}`)) {
      //console.log(`current user ID: ${id} / ${name}`);
      axios
        .delete(`/api/admin/user/delete/${id}`)
        .then((result) => {
          if (result) {
            //console.log("User deleted");
            loadUsers();
            toast.success(`current user ID: ${id} / ${name} deleted`);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <Menu />
      <SidebarAdmin />
      <div className='container ' style={{ paddingLeft: '150px', paddingTop: '100px' }}>
        <h1>Registered Users</h1>
        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'> Name</th>
              <th scope='col'>E-mail</th>
              <th scope='col'>Status</th>
              <th scope='col'>Edit</th>
              <th scope='col'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, id) => (
                <tr key={id}>
                  <th scope='row'>{user._id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role === 1 ? 'Admin' : 'User'}</td>
                  <td>
                    <Link to={`/admin/user/edit/${user._id}`}>
                      {' '}
                      <i className='fas fa-edit btn-primary'></i>
                    </Link>
                  </td>
                  <td>
                    <i onClick={() => deleteUser(user._id, user.name)} className='far fa-trash-alt btn-danger' style={{ cursor: 'pointer' }}></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <Pagination current={pageNumber} total={totalItem} onChange={(value) => setPageNumber(value)} pageSize={5} />
      </div>
      <Footer />
    </>
  );
};

export default AdminUsersList;
