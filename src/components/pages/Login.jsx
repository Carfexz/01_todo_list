import Layout from "./Layout/Layout";
import LoginWidget from '../widgets/Login/Login'
import { motion } from "framer-motion";

const Login = () => {
    return (
        <Layout isHeader={false} isFooter={false}>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <LoginWidget />
            </motion.div>
        </Layout>
    )
}

export default Login;