import './Header.css'
import { TfiAlignRight } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import { TfiUser } from "react-icons/tfi";


const Header = () => {
    return (
        <div className="main-header">
            <div><TfiUser /></div>
            <div><TfiAlignRight /></div>
        </div>
    )
}

export default Header;