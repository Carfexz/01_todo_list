import LoginWindow from '../../entites/LoginWindow/LoginWindow';
import Title from '../../entites/Title/Title'
import Container from '../../entites/Container/Container';
import Modal from '../../entites/Modal/Modal';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import { useInput } from '../../ui/Input/useInput';
import './Login.css'

const Login = () => {

    const password = useInput(['', ''])
    const email = useInput(['', ''])

    return (
        <LoginWindow>
            <Modal isGrClose={false} className='modal-style-login'>
                <Title text='E-Mail' />
                <Container>
                    <Input {...email} placeholder='E-Mail' className='login-input' />
                </Container>

                <Title text='Password' />

                <Container>
                    <Input {...password} placeholder='Password' className='login-input' type='password' />
                </Container>

                <div className='padding-2-gap' />

                <Button text='Log in' />
            </Modal>
        </LoginWindow>
    )
}



export default Login;

