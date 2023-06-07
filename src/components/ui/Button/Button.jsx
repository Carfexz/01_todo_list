import './Button.css'

const Button = ({ text }) => {
    return (
        <div>
            <button className='button' onClick={() => console.log('Работает!')}>{text}</button>
        </div>
    )
}

export default Button