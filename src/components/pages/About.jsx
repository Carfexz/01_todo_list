import Modal from "../entites/Modal/Modal/Modal";
import Title from "../entites/Title/Title";
import { motion } from "framer-motion";
import { animationAscent } from "../../const/animations/items";
import Layout from "./Layout/Layout";
import CenteringContainer from "../entites/CenteringContainer/CenteringContainer";

const About = () => {
    return (
        <Layout isFooter={false} isHeader={true}>
            <CenteringContainer>
                <motion.div className=""
                    {...animationAscent}
                >
                    <Modal isGrClose={false}>
                        <Title text='GitHub @Carfexz' />
                    </Modal>
                    <br />
                    <Modal isGrClose={false}>
                        <Title text='React + JavaScript' />
                    </Modal>
                </motion.div>
            </CenteringContainer>
        </Layout>
    )
}

export default About;

