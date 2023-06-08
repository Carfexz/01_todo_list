import LoginWindow from '../../entites/LoginWindow/LoginWindow';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import './Login.css'

const Login = () => {
    return (
        <LoginWindow>
            <div className='text-style'>
                E-Mail
            </div>
            <Input placeholder={'E-Mail'} />
            <div className='text-style'>
                Password
            </div>
            <Input placeholder={'Password'} />
            <div className='padding-button' />
            <Button text={'Log in'} />
        </LoginWindow>
    )
}

export default Login;

