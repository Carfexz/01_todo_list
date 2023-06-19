import { motion } from 'framer-motion';
import './Input.css'


const Input = ({ value, className = '', type, onChange, onClick, placeholder, text }) => {
    return (
        <div className={`input ${className}`} >
            <motion.input
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 1 }}
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