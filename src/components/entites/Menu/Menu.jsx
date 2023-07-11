import { motion } from 'framer-motion';
import Modal from '../../entites/Modal/Modal/Modal'
import Button from '../../ui/Button/Button';
import './Menu.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Menu = ({ closeMenu }) => {
    const navigate = useNavigate()
    return (
        <motion.div

        >
            <div className='invisibleBackdrop' onClick={closeMenu}>
                <div className='padding'>
                    <Modal className='menu' isGrClose={false}>
                        <Link to="./about">
                            <Button onClick={() => { console.log('btn1'); }} text={'About'} />
                        </Link>
                        <br />
                        <Link to="./posts">
                            <Button onClick={() => navigate(-1)} text={'Posts'} />
                        </Link>
                    </Modal>
                </div>
            </div>
        </motion.div>
    )
}

export default Menu;