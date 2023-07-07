import './Header.css'
import Button from '../../ui/Button/Button';

const Header = ({ openMenu }) => {
    return (
        <div className="main-header">
            <Button isUser={true} userIcon={false} />
            <Button
                isBurger={true}
                burgerIcon={true}
                onClick={openMenu} />
        </div>
    )
}

export default Header;