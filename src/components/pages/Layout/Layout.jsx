import Footer from "../../widgets/Footer/Footer";
import Header from "../../widgets/Header/Header";

const Layout = ({ children, isHeader = true, isFooter = true }) => {
    return (
        <div>
            {isHeader && <Header />}
            {children}
            {isFooter && <Footer />}
        </div>
    )
}

export default Layout;