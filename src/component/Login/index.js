import { useNavigate } from "react-router-dom"
import { useAuth } from "../useAuth"

export const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate()

    const loginHandler = () => {
        login()
        navigate('/home')
    }

    return (
        <div>
            <button onClick={loginHandler}>Login</button>
        </div>
    )
}