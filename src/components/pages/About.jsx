import Backdrop from "../entites/Backdrop/Backdrop";
import Modal from "../entites/Modal/Modal";
import Title from "../entites/Title/Title";
import { motion } from "framer-motion";

const About = () => {
    return (
        <Backdrop>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <Modal isGrClose={false}>
                    <Title text='GitHub @Carfexz' />
                </Modal>
                <br />
                <Modal isGrClose={false}>
                    <Title text='React + JavaScript' />
                </Modal>
            </motion.div>
        </Backdrop>
    )
}

export default About;

