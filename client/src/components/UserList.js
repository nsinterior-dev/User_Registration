import React, {useState, useEffect} from 'react';
import { Header } from "./header";
import { Link } from 'react-router-dom';
import { MdModeEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { getUsers} from './api';
import axios from 'axios';
export const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const fetchUsers = async () => {
            const user = await getUsers();
            setUsers(user);
        }
        fetchUsers();
    }, []);

    const deleteUser = (id) => {
        axios.delete(`http://localhost:4000/delete/${id}`);
         
    }

    return (
        <div>
           <Header title="Users" />
           <table className="table table-striped table-bordered">
               <thead>
                   <tr>
                       <th>#</th>
                       <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Mobile Number</th>
                        <th colSpan={2}>Actions</th>
                   </tr>
               </thead>
               <tbody>
                       {
                           users.map(user => (
                               <tr key={user._id}>
                                   <td>{user._id}</td>
                                   <td>{user.firstname}</td>
                                   <td>{user.lastname}</td>
                                   <td>{user.gender}</td>
                                   <td>{user.email}</td>
                                   <td>{user.password}</td>
                                   <td>{user.mobilenum}</td>
                                   <td><Link to={`/edituser/${user._id}`} ><MdModeEdit /></Link></td>
                                   <td><button className="delete" onClick={()=>deleteUser(user._id)}><MdDelete /></button></td>
                               </tr>
                           ))
                       }
                       
               </tbody>
           </table>
        </div>
    );
}


