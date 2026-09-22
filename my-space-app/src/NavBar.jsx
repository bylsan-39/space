function NavBar() {

    return (
        <div data-aos="fade-down" className="nav">
            <div className="container">
                <div className="navBar">
                    <div className="logo">
                        <img src="../src/assets/star.png" alt="" />
                        <span>SPACE-WORLD</span>
                    </div>
                    <div className="stuff">
                        <ul>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Tecnology</a>
                            </li>
                            <li>
                                <a href="#">Galaxy</a>
                            </li>
                            <li>
                                <a href="#">Satelite</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button className="log">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default NavBar