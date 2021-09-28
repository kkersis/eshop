import { useContext } from "react"
import { UserContext } from "../common/providers/UserProvider"

function Home() {
    const user = useContext(UserContext);

    return (
        <div>
            Welcome, <b>{user.username}</b>!
        </div>
    )
}

export default Home
