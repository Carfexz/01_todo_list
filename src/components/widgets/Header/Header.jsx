import './Header.css'
import Button from '../../ui/Button/Button';

const Header = () => {
    return (
        <div className="main-header">
            <Button isUser={true} userIcon={true} />
            <Button isBurger={true} burgerIcon={true} />
        </div>
    )
}

export default Header;