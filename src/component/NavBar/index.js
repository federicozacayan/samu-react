import './index.css';
import { NavLink } from './NavLink';

export function NavBar() {
    return <nav className="nav">
        <ul>
            <li><NavLink to="/home" >Home</NavLink></li>
            <li><NavLink to="/" >Todo</NavLink></li>
            <li><NavLink to="/pepe" >Pepe</NavLink></li>
            <li><NavLink to="/account" >Account</NavLink></li>
        </ul>
    </nav>
}