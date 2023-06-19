import Layout from "./Layout/Layout";
import LoginWidget from '../widgets/Login/Login'
import { motion } from "framer-motion";

const Login = () => {
    return (
        <Layout isHeader={false} isFooter={false}>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.3,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <LoginWidget />
            </motion.div>
        </Layout>
    )
}

export default Login;