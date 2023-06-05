import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <header>
                <Link to='/login'>Login</Link>
                <Link to='/about'>About</Link>
            </header>

            <Outlet />

            <footer>2023</footer>
        </>
    )
}

export default Layout;