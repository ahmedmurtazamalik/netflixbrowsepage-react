import './style.css';

function Footer() {
    return (
        <div id="footer">
            <div id="footericons">
                <img src="data/icons/fb.png" alt="Facebook Icon" />
                <img src="data/icons/insta.png" alt="Instagram Icon" />
                <img src="data/icons/yt.png" alt="YouTube Icon" />
            </div>

            <div className="footerlistcontainer">
                <div id="footerlist1" className="footerlist">
                    <ul>
                        <li><a href="#">Audio Description</a></li>
                        <li><a href="#">Investor Relations</a></li>
                        <li><a href="#">Legal Notices</a></li>
                    </ul>
                </div>
                <div id="footerlist2" className="footerlist">
                    <ul>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Cookie Preferences</a></li>
                    </ul>
                </div>
                <div id="footerlist3" className="footerlist">
                    <ul>
                        <li><a href="#">Gift Cards</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Corporate Information</a></li>
                    </ul>
                </div>
                <div id="footerlist4" className="footerlist">
                    <ul>
                        <li><a href="#">Media Center</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div id="footerlistalt1" className="footerlistalt">
                    <ul>
                        <li><a href="#">Audio Description</a></li>
                        <li><a href="#">Gift Cards</a></li>
                        <li><a href="#">Investor Relations</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Legal Notices</a></li>
                        <li><a href="#">Corporate Information</a></li>
                    </ul>
                </div>

                <div id="footerlistalt2" className="footerlistalt">
                    <ul>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Media Center</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Cookie Preferences</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>

            <div className="servicecode">
                <button className="servicecodebutton">Service Code</button>
            </div>

            <div className="copyright">
                <p>© 1997-2023 Netflix, Inc.</p>
            </div>
        </div>
    );
}

export default Footer;
