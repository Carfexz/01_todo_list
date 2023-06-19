import { motion } from 'framer-motion'
import './Button.css'


const Button = ({ text, onClick }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.010 }}
            whileTap={{ scale: 0.95 }}
        >
            <button className='button' onClick={onClick}>{text}</button>
        </motion.div >
    )
}

export default Button