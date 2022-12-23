import { useNavigate } from "react-router-dom"
import { useAuth } from "../useAuth"

export const Logout = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()

    const loginHandler = () => {
        logout()
        navigate('/home')
    }
    return (
        <div>
            <button onClick={loginHandler}>Logout</button>
        </div>
    )
}

