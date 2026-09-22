import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdMessage, MdCall } from "react-icons/md";
function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="parts">
                    <div className="part1">
                        <h1>Be Ready To Grow</h1>
                        <p>Get Exclusive <span>UpDate</span>
                            Straigt To Your inBox</p>
                        <br />
                        <input type="text" placeholder="Your Email" />
                        <button>Subscribe</button>
                    </div>
                    <div className="part2">
                        <h1>Quick Links</h1>
                        <div className="part">
                            <ul>
                                <li><a href="#">home</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">login</a></li>
                            </ul>
                            <div className="part0">
                                <a href="#"><FaInstagram className="ic"></FaInstagram></a>
                                <a href="#"><FaFacebook className="ic" ></FaFacebook></a>
                                <a href="#"><FaLinkedinIn className="ic"></FaLinkedinIn></a>
                            </div>
                        </div>
                    </div>
                    <div className="part3">
                        <h1>Contact Us</h1>
                        <HiLocationMarker></HiLocationMarker> :
                        <p>Bylsan , somewhere on the Earth</p>
                        <MdMessage></MdMessage> :
                        <p>********@gmail.com</p>
                        <MdCall></MdCall> :
                        <p>0992******</p>
                    </div>
                </div>
            </div>
        </div>
        //designed by bylsan 2026
    );
}
export default Footer