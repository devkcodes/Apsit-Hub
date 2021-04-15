import React from 'react'
import './Landing.css'
import waveSVG from './wave.svg'
import blobs from '../../img/blobs-01.svg'
import hero from '../../img/hero.svg'
import logo from '../../img/APSIT-HUB.svg'
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Login from "../auth/Login";
import PropTypes from "prop-types";

function Landing({ isAuthenticated }) {
  	if (isAuthenticated) {
		return <Redirect to="/posts" />;
	}
  return (
    <div>



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




    <footer class="footer">
 <waveSVG/>
<svg class="svg-class" viewBox="0 0 120 28">
  <defs> 
    <filter id="goo"/>
      <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 10 h -240 z" />
  </defs> 

    <use id="wave3" class="wave" xlinkhref="#wave" x="0" y="0"></use> 
    <use id="wave2" class="wave" xlinkhref="#wave" x="0" y="0" ></use>
</svg>

<div class="footer-content">
  <div class="footer-row-1">
   <div class="logo svelte-yoh1v8">
            <img src={logo} alt="serio verify logo" class="svelte-yoh1v8"/>
          </div>

    <div class="follow">
      <span>Follow Apsit: </span>
      <i class="fa fa-instagram"></i>
      <i class="fa fa-linkedin"></i>
      <i class="fa fa-twitter"></i>
      <i class="fa fa-facebook"></i>
    </div>

  </div>  
    <div class="footer-row-2">
    Made by  @devansh
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
