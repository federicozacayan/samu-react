import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../useAuth"

export const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate()
    const {state} = useLocation()
    const loginHandler = () => {
        login()
        navigate(state?.location?.pathname ?? '/')
    }
    return (
        <div>
            <button onClick={loginHandler}>Login</button>
        </div>
    )
}

