import {Link} from 'react-router-dom';
import './css/nav.css';


export const Nav = () => {
    return (
        <div className="wrapper">
            <h1>User Registration</h1>
            <br />
            <br/>
            <Link to="/userlist" className="btn btn-dark user">Users</Link>
            <Link to="/newuser" className="btn btn-primary user">Register</Link>
    
        </div>
    );
}
