import './UserCard.css'

const UserCard = ({user}) => {
    return (
        <div className="user-card">
            <div className="user-name">{user.name.first} {user.name.last}</div>
            <img src={user.picture.medium} alt="user" />
        </div>
    )   
}

export default UserCard