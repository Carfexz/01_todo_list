import './Input.css'

const Input = ({ value, className = '', type, onChange, onClick }) => {

    return (
        <div className={`input ${className}`} >
            <input onChange={onChange} autoComplete="new-password" value={value} className='input-textfield' type={type} onClick={onClick} />
        </div>
    )
}



export default Input;