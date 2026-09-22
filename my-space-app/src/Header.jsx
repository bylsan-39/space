import NavBar from "./NavBar";
import HeaderText from "./HeaderText";
function Header() {
    return (
        <div className="header">
            <div className="container">
                <video className="earth-bg" autoPlay loop muted>
                    <source src="../src/assets/erath-bg.MP4" type="video/mp4" />
                </video>
                <NavBar></NavBar>
                <HeaderText></HeaderText>
            </div>
        </div>
    );

}
export default Header
