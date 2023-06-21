import { motion } from 'framer-motion';
import { animationAscent } from '../../../const/animations/items';
import './Title.css'

const Title = ({ text }) => {
    return (
        <motion.h2
            {...animationAscent}
            className='title'
        >
            {text}
        </motion.h2>
    )
}

export default Title;