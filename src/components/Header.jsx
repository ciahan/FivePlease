import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="header">
            {/* Logo */}
            <div className="flex gap-6 items-center">
                <Link to="/">
                    <img
                        src={"/Logo/keytofive_logo.png"}
                        style = {{ width: "auto", height: "50px" }}
                    />
                </Link>
                <Link to="/">
                    Key to Five
                </Link>
            </div>
            {/* Navigation buttons */}
            <nav className="navButtons">
                <Link to="/">
                    Home
                </Link>
                <Link to="/subjects">
                    Subjects
                </Link>
                <Link to="/mission">
                    Our Mission
                </Link>
                <Link to="/team">
                    Meet the Team
                </Link>
                
                {/* SCRAPPED DROWN-DOWN MENU COMBINING ABOUT-MAIN AND ABOUT-TEAM
                <div className="navItemWithDropdown">
                <span> About </span>
                <div className="dropdownMenu">
                    <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); setCurrentPage('about-main'); }}
                    >
                    Our Mission
                    </a>
                    <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); setCurrentPage('about-team'); }}
                    >
                    Meet the Team
                    </a>
                </div>
                </div>
                */}
            </nav>
        </header>
    )
}