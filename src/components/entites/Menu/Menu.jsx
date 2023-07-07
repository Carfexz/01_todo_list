import Modal from '../../entites/Modal/Modal/Modal'
import Button from '../../ui/Button/Button';
import './Menu.css'

// const modalRootElement = document.querySelector('#modal')

const Menu = ({ closeMenu }) => {

    return (
        <div className='invisibleBackdrop' onClick={closeMenu}>
            <div className='padding'>
                <Modal className='menu' isGrClose={false}>
                    <Button onClick={() => { console.log('btn1'); }} text={'About'} />
                    <br />
                    <Button onClick={() => { console.log('btn2'); }} text={'Posts'} />
                </Modal>
            </div>
        </div>
    )
}

export default Menu;