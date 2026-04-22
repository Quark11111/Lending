import { motion } from "framer-motion"

const Hero = (props) => {
    return (
        <section>
            <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>{props.title}</motion.h1>
            <p>{props.text}</p>
            <button>{props.buttonText}</button>
        </section>
    )
}

export default Hero