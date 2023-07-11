import Footer from "../../widgets/Footer/Footer";
import Header from "../../widgets/Header/Header";

import './Layout.css'

const Layout = ({ children, isHeader = true, isFooter = true, openModal, openMenu }) => {

    return (
        <div className="layout">
            {isHeader && <Header openMenu={openMenu} />}
            {children}
            {isFooter && <Footer openModal={openModal} />}
        </div>
    )
}

export default Layout;