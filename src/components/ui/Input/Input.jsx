import './Input.css'

const Input = ({ value, className = '', type, onChange, onClick, placeholder, text }) => {

    return (
        <div className={`input ${className}`} >
            <input
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