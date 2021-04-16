import React from "react";
import "./footer.css";

function Footer() {
	return (
		<div id="footer">
			<div id="footer-title">
				<span className="outlined">Apsit</span> Hub
			</div>
			<div id="footer-links">
				<a href=".">Home</a>
				<a href="/login">Sign In</a>
				<a href="/register">Create Account</a>
				<a href="https://opensource.org/licenses/MIT" target="_blank">
					LICENCE
				</a>
				<a href="https://github.com/devkcodes/" target='_blank'>Feedback</a>
				<a href="https://www.apsit.edu.in/home" target="_blank">
					APSIT
				</a>
			</div>
			<div className="made__by">
				Created and maintained by <a href="https://github.com/reeticodes" target="_blank" rel="noopener noreferrer">Reeti</a>{" and  "}
				<a href="https://github.com/devkcodes/" target="_blank" rel="noopener noreferrer">Devansh Katheria</a> 
			
			</div>
		</div>
	);
}

export default Footer;