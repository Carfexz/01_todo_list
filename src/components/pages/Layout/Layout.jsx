import Footer from "../../widgets/Footer/Footer";
import Header from "../../widgets/Header/Header";
import './Layout.css'

const Layout = ({ children, isHeader = true, isFooter = true, openModal }) => {
    return (
        <div className="layout">
            {isHeader && <Header />}
            {children}
            {isFooter && <Footer openModal={openModal}/>}
        </div>
    )
}

export default Layout;