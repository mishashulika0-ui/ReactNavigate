import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="layout">
            <header className="header">
                <NavLink to="/" end>Головна</NavLink>
                <NavLink to="/products">Каталог</NavLink>
            </header>

            <main className="content">
                <Outlet />
            </main>

            <footer className="footer">©2026 (не)захищено  </footer>
        </div>
    );
};

export default MainLayout;