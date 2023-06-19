import { motion } from 'framer-motion';
import './Title.css'

const Title = ({ text }) => {
    return (
        <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='title'
        >
            {text}
        </motion.h2>
    )
}

export default Title;