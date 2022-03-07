import { Link } from "react-router-dom"

const Home =()=>{
    return(
        <div>
            <h1>welcome</h1>
            <h2><Link to={'/users'}>See Users</Link></h2>
        </div>
    )
}
export default Home