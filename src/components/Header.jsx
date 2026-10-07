function Header(){
    return (
        <header className="app-header">
            <div className="brand">
                <div className="brand-icon">
                    ✓
                </div>
                <div className="brand-name">
                    iPDF
                </div>
            </div>
            <nav className="header-navigation">
                <button className="nav-link">
                    Dashboard
                </button>
                <button className="nav-link">
                    Admin
                </button>
            </nav>

        </header>
    );
}

export default Header;