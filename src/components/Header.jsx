
function Header() {
    return (
        <header className="sticky top-0 z-10 bg-black-transparent border border-transparent border-b-sky-400">
            <div className="top-bar flex justify-between items-center">
                <div>
                    <span> Email: </span> 
                    <a href="mailto:info@tayabraza.com" className="gradient-tr">
                        info@tayabraza.com
                    </a>
                </div>
                <div className="flex social">
                    <a href="https://linkedin.com/in/tayabraza" target="_blank" rel="noopener noreferrer" className="me-4">
                        <img src="../src/img/linkedin.png" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/tayabraza" target="_blank" rel="noopener noreferrer">
                        <img src="../src/img/github.png" alt="Github" />
                    </a>
                </div>

            </div>
        </header>
    );
}

export default Header;