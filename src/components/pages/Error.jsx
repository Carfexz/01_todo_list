import Backdrop from "../entites/Modal/Backdrop/Backdrop";
import Modal from "../entites/Modal/Modal/Modal";
import Title from "../entites/Title/Title";
import { motion } from "framer-motion";
import { animationAscent } from "../../const/animations/items";


const Error = () => {
    return (
        <Backdrop>
            <motion.div
                {...animationAscent}
            >
                <Modal isGrClose={false}>
                    <Title text='PAGES NOT FOUND! err.404' />
                </Modal>
            </motion.div>
        </Backdrop>
    )
}

export default Error;