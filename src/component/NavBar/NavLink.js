import { NavLink as NavLinkReacRouter } from 'react-router-dom';

export const NavLink = ({to, children, ...props}) => {
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