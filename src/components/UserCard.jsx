import './UserCard.css'
import { motion } from 'framer-motion'

const UserCard = ({user}) => {
    return (
        <motion.div className="user-card"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <div className="user-name">{user.name.first} {user.name.last}</div>
            <img src={user.picture.medium} alt="user" />
        </motion.div>
    )   
}

export default UserCard