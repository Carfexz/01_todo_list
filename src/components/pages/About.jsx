import Backdrop from "../entites/Backdrop/Backdrop";
import Modal from "../entites/Modal/Modal";
import Title from "../entites/Title/Title";
import { motion } from "framer-motion";
import { animationAscent } from "../../const/animations/items";

const About = () => {
    return (
        <Backdrop>
            <motion.div
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
        </Backdrop>
    )
}

export default About;

