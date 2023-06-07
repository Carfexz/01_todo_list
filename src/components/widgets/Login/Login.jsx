import LoginWindow from '../../entites/LoginWindow/LoginWindow';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import './Login.css'

const Login = () => {
    return (
        <LoginWindow>
            <Input />
            <Input />
            <Button />
        </LoginWindow>
    )
}

export default Login;

