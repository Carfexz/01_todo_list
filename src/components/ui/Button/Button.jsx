import { motion } from 'framer-motion'
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { TfiAlignRight } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import { TfiUser } from "react-icons/tfi";
import './Button.css'


const Button = ({ text, onClick, isCircle, isCross, isEdit, isUser, isBurger, crossIcon = false, editIcon = false, userIcon = false, burgerIcon = false }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.010 }}
            whileTap={{ scale: 0.95 }}
        >
            <button onClick={onClick} text={text} className={
                `button
                 ${isCircle ? 'circle' : 'button'}
                 ${isCross ? 'cross' : 'button'}
                 ${isEdit ? 'edit' : 'button'}
                 ${isUser ? 'user' : 'button'}
                 ${isBurger ? 'burger' : 'button'}`}
            >
                {text}
                {crossIcon && <AiFillCloseCircle className='cross' />}
                {editIcon && <AiOutlineEdit className='edit' />}
                {userIcon && <TfiUser className='user' />}
                {burgerIcon && <TfiAlignRight className='burger' />}
            </button>
        </motion.div >
    )
}

export default Button

// isCircle = true, isGrClose = true