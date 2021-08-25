import { Link } from 'react-router-dom';
import {ImArrowLeft} from 'react-icons/im';
export const Header = () => {
    return (
        <div>
            <nav className="navbar bg-light navbar-expand-lg navbar-dark">
                <Link to="/" className="back"> <ImArrowLeft/></Link>
            </nav>
        </div>
    );
}