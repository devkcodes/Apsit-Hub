import React from 'react'
import './Landing.css'
import wave from '../../img/wave.png'
import blobs from '../../img/blobs-01.svg'
import hero from '../../img/hero.svg'
import logo from '../../img/APSIT-HUB.svg'
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Login from "../auth/Login";
import PropTypes from "prop-types";
import './footer.css'

function Landing({ isAuthenticated }) {
  	if (isAuthenticated) {
		return <Redirect to="/posts" />;
	}
  return (
    <div className='maindev'>



  <main class="section-wrapper">

    <img src={blobs} alt="blobs" class="svelte-1p7dm5a"/>

      <section class="section-content hero svelte-1424rrd">
        <div class="content svelte-1424rrd">
          <h1 class ="heading">
            <span class="grey">
					Connecting
					<br/>
        </span>
				APSIT peers
			</h1> 

      <br/>

      <p class="svelte-1424rrd">A platform for anybody who has knack for programming apsit hub apsit hub apsit hub apsit hub apsit hub apsit hub  </p>
          <button className="btn-land"><a href='login'>Sign In</a></button>
          <button className="btn-land"><a href='register'>Sign Up</a></button>
        </div> 
        

        
        <img class="image-wrapper svelte-1424rrd"  src={hero} alt="hero"/>
     
      </section>

      <div class="menu section-wrapper svelte-yoh1v8 show">
        <div class="section-content svelte-yoh1v8">
          <div class="logo svelte-yoh1v8">
            <img src={logo} alt="serio verify logo" class="svelte-yoh1v8"/>
          </div>
            <div class="links svelte-yoh1v8"><a href="profiles" class="svelte-yoh1v8">Students</a> 
				<a href="https://www.apsit.edu.in/home" target="_blank" class="svelte-yoh1v8">APSIT</a> 
				<a href="https://www.github.com/devkcodes" class="svelte-yoh1v8">Feedback</a> 
</div>
</div>
</div>








    </main>


    <img src={wave} class="waves" alt="wave"/>
   
    <footer class="footer">
      
  <div class="footer__addr">
    <h1 class="footer__logo">Something</h1>
        
    <h2>Contact</h2>
    
    <address>
      5534 Somewhere In. The World 22193-10212
          
      <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Media</h2>

      <ul class="nav__ul">
        <li>
          <a href="#">Online</a>
        </li>

        <li>
          <a href="#">Print</a>
        </li>
            
        <li>
          <a href="#">Alternative Ads</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">Technology</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="#">Hardware Design</a>
        </li>
        
        <li>
          <a href="#">Software Design</a>
        </li>
        
        <li>
          <a href="#">Digital Signage</a>
        </li>
        
        <li>
          <a href="#">Automation</a>
        </li>
        
        <li>
          <a href="#">Artificial Intelligence</a>
        </li>
        
        <li>
          <a href="#">IoT</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2019 Something. All rights reserved.</p>
    
    <div class="legal__links">
      <span>Made with <span class="heart">♥</span> remotely from Anywhere</span>
    </div>
  </div>
</footer>

    </div>
  )
}
Landing.propTypes = {
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Landing);
