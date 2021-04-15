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

      <p class="para svelte-1424rrd">A platform for anybody who has knack for programming apsit hub apsit hub apsit hub apsit hub apsit hub apsit hub  </p>
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
            <div class="links svelte-yoh1v8"><a href="profiles" class="link svelte-yoh1v8">Students</a> 
				<a href="https://www.apsit.edu.in/home" target="_blank" class="link svelte-yoh1v8">APSIT</a> 
				<a href="https://www.github.com/devkcodes" class="link svelte-yoh1v8">Feedback</a> 
</div>
</div>
</div>








    </main>


    
    <img src={wave} class="waves" alt="wave"/>
   
    
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
