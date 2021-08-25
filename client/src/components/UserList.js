import { Header } from "./header";
import { Link } from 'react-router-dom';
import { MdModeEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
export const UserList = () => {
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
                   <tr>
                       <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td><Link to="/edituser" ><MdModeEdit/></Link></td>
                        <td><MdDelete/></td>
                   </tr>
               </tbody>
           </table>
        </div>
    );
}


