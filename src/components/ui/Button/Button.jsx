import { motion } from 'framer-motion'
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { TfiAlignRight } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import { TfiUser } from "react-icons/tfi";
import { buttonAnimations } from '../../../const/animations/items';
import './Button.css'


const Button = ({ text, onClick, isCircle, isCross, isEdit, isUser, isBurger, isCompleteIcon, crossIcon = false, editIcon = false, userIcon = false, burgerIcon = false, completeIcon = false }) => {
    return (
        <motion.div
            {...buttonAnimations}
        >
            <button onClick={onClick} text={text} className={
                `button
                 ${isCircle ? 'circle' : 'button'}
                 ${isCross ? 'icon' : 'button'}
                 ${isEdit ? 'icon' : 'button'}
                 ${isUser ? 'icon' : 'button'}
                 ${isBurger ? 'icon' : 'button'}
                 ${isCompleteIcon ? 'icon' : 'button'}`}
            >
                {text}
                {crossIcon && <AiFillCloseCircle className='icon' />}
                {editIcon && <AiOutlineEdit className='icon' />}
                {userIcon && <TfiUser className='icon' />}
                {burgerIcon && <TfiAlignRight className='icon' />}
                {completeIcon && <AiOutlineCheck className='icon' />}
            </button>
        </motion.div >
    )
}

export default Button

// isCircle = true, isGrClose = true