import Button from '../../ui/Button/Button';
import './Footer.css'

const Footer = ({ openModal, text = '+' }) => {
    return (
        <div className="main-footer">
            <Button
                isCircle={true}
                onClick={openModal}
                text={text}
            >{text}</Button>
        </div>
    )
}

export default Footer;