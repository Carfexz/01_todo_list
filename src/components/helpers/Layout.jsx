import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <header>
                <Link to='/login'>Login-</Link>
                <Link to='/posts'>-Posts-</Link>
                <Link to='/about'>-About</Link>
            </header>
            <Outlet />
        </>
    )
}

export default Layout;