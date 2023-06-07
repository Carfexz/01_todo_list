import Layout from "./Layout/Layout";
import LoginWidget from '../widgets/Login/Login'

const Login = () => {
    return (
        <Layout isHeader={true} isFooter={true}>
            <LoginWidget />
        </Layout>
    )
}

export default Login;