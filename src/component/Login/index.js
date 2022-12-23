import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../useAuth"

export const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const loginHandler = () => {
        login()
        navigate(location.state.location)
    }
    return (
        <div>
            <button onClick={loginHandler}>Login</button>
        </div>
    )
}

