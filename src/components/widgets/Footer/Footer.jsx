import './Footer.css'
import CreatePostModal from '../CreatePostModal/CreatePostModal';

const Footer = ({ openModal }) => {

    return (
        <div className="main-footer">
            <div className='circle-btn' onClick={openModal}>+</div>

        </div>
    )
}

export default Footer;