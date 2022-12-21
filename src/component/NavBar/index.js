import { NavLink as NavLinkReacRouter } from 'react-router-dom';
import './index.css';

const NavLink = ({to, children, ...props}) => {
    return (
        <NavLinkReacRouter
            {...props}
            className={({ isActive }) => {
                return isActive ? 'is-active' : undefined
            }}
            to={to}>
            {children}
        </NavLinkReacRouter>
    )
}

export function NavBar() {
    return <nav className="nav">
        <ul>
            <li><NavLink to="/home" >Home</NavLink></li>
            <li><NavLink to="/" >Todo</NavLink></li>
            <li><NavLink to="/pepe" >Pepe</NavLink></li>

        </ul>
    </nav>
}