import { useUser } from "../services/useUser"

const Home = () => {
    const { loading, item } = useUser(5)
    console.log('1', `loading: ${loading}`);
    if (loading) return <div>Loading...</div>
    return (
        <div>Name: {item.name} </div>
    )
}
export default Home