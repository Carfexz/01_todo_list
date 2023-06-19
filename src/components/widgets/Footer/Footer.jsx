import { motion } from 'framer-motion';
import './Footer.css'

const Footer = ({ openModal, text = '+' }) => {
    return (
        <div className="main-footer">
            <motion.div
                whileHover={{ scale: 1.1, rotate: 75 }}
                whileTap={{
                    scale: 0.8,
                    rotate: -75,
                    borderRadius: "100%"
                }}
                className='circle-btn'
                onClick={openModal}
            >{text}</motion.div>
        </div>
    )
}

export default Footer;