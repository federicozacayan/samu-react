import { Login } from "../Login"
import { Logout } from "../Logout"
import { useAuth } from "../useAuth"

export const Account = () =>{
    const { isAuthenticated } = useAuth()
    return !isAuthenticated ?<Login />:<Logout />
}