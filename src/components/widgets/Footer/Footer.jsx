import './Footer.css'

const Footer = ({ text = '+' }) => {
    return (
        <div className="main-footer">
            <div className='circle-btn'>{text}</div>

        </div>
    )
}

export default Footer;