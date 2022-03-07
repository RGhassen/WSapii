import axios from "axios"
import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { useNavigate } from "react-router"
import Usercard from "./Usercard"

const Listusers =()=>{
    const [users,setUsers]=useState([])
    const [load,setLoad]=useState(true)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>setUsers(res.data))
        .then(()=>setLoad(false))
        .catch((err)=>console.log(err))
    })
    const navigate = useNavigate()
    return(
        <div>
            {
                load ? 
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                 :
                  users.map(user=><Usercard user={user}/>)
            }
            <button onClick={()=>navigate('/')}>return</button>
        </div>
    )
}
export default Listusers