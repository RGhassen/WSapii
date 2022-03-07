import { Card, ListGroup } from "react-bootstrap"

const Usercard=({user})=>{
    return(
        <div className="UserCard">
            <Card style={{ width: '18rem' }}>
                <Card.Header>User Card</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item> User name : {user.name}</ListGroup.Item>
                    <ListGroup.Item>User email :{user.email}</ListGroup.Item>
                    <ListGroup.Item>Username :{user.username}</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}
export default Usercard