import Layout from "./Layout/Layout";
import LoginWidget from '../widgets/Login/Login'

const Login = () => {
    return (
        <Layout isHeader={false} isFooter={false}>
            <LoginWidget />
        </Layout>
    )
}

export default Login;