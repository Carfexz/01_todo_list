import './LoginWindow.css'

const LoginWindow = ({ children }) => {
    return (
        <div className='container-login'>
            {children}
        </div>
    )
}

export default LoginWindow;