import Button from '../../ui/Button/Button';
import LoginWindow from '../../entites/LoginWindow/LoginWindow';
import Input from '../../ui/Input/Input';
import Title from '../../entites/Title/Title'
import './Login.css'
import Container from '../../entites/Container/Container';

const Login = () => {
    return (
        <LoginWindow>
            <Title text='E-Mail' />

            <Container>
                <Input placeholder='E-Mail' className='login-input' />
            </Container>

            <Title text='Password' />

            <Container>
                <Input placeholder='Password' className='login-input' type='password' />
            </Container>

            <div className='padding-2-gap' />

            <Button text='Log in' />
        </LoginWindow>
    )
}

export default Login;

