import './Input.css'

const Input = ({ value, className = '', type, onChange }) => {

    return (
        <div className={`input ${className}`} >
            <input onChange={onChange} autoComplete="new-password" value={value} className='input-textfield' type={type} />
        </div>
    )
}



export default Input;