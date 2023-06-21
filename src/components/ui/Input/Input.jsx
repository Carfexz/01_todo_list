import { motion } from 'framer-motion';
import { inputAnimations } from '../../../const/animations/items';
import './Input.css'


const Input = ({ value, className = '', type, onChange, onClick, placeholder, text }) => {
    return (
        <div className={`input ${className}`} >
            <motion.input
                {...inputAnimations}
                onChange={onChange}
                autoComplete="new-password"
                value={value} className='input-textfield'
                type={type}
                onClick={onClick}
                placeholder={placeholder}
            />
        </div>
    )
}



export default Input;