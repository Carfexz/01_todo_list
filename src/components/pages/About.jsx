import Layout from "./Layout/Layout";
import Modal from "../entites/Modal/Modal/Modal";
import Title from "../entites/Title/Title";
import CenteringContainer from "../entites/CenteringContainer/CenteringContainer";
import { useMenu } from "../entites/Menu/hooks/useMenu";
import Menu from '../entites/Menu/Menu'
import { animationAscent } from "../../const/animations/items";
import { motion } from "framer-motion";


const About = () => {
    const menuModal = useMenu(false)
    return (
        <Layout isFooter={false} isHeader={true} openMenu={menuModal.openMenu}>
            {menuModal.isShowMenu && <Menu isAboutBtn={false} closeMenu={menuModal.closeMenu} />}
            <motion.div className=""
                {...animationAscent}
            >
                <CenteringContainer>
                    <Modal isGrClose={false}>
                        <Title text='GitHub @Carfexz' />
                    </Modal>
                </CenteringContainer>
                <CenteringContainer>
                    <Modal isGrClose={false}>
                        <Title text='React + JavaScript' />
                    </Modal>
                </CenteringContainer>
            </motion.div>
        </Layout>
    )
}

export default About;

