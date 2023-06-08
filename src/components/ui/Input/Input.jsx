import './Input.css'

const Input = ({ text, className = '', type }) => {
    return (
        <div className={`input ${className}`} >
            <input value={text} className='input-textfield' type={type} />
        </div>
    )
}



export default Input;