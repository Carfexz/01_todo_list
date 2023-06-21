import Layout from "./Layout/Layout";
import LoginWidget from '../widgets/Login/Login'
import { motion } from "framer-motion";
import { animationAscent } from "../../const/animations/items";

const Login = () => {
    return (
        <Layout isHeader={false} isFooter={false}>
            <motion.div
                {...animationAscent}
            >
                <LoginWidget />
            </motion.div>
        </Layout>
    )
}

export default Login;