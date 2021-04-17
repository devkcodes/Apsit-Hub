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

     

      <img class="mob  svelte-1424rrd"  src={hero} alt="hero"/>
      <br/>
  
      <h1 class ="h1mob">
        <span>Apsit Hub</span><span> </span>
            <span class="grey">
					Connecting
				
        </span><span> </span>
				  APSIT peers
			</h1> 
      <p class="para svelte-1424rrd">A platform for anybody who has knack for programming. We are a Community of programmers and students who share doubts, knowledge and learn stuff together here on Apsit Hub </p>
      <a href='login'> <button className=" btn-land">Sign In</button></a>
         
          <a href='register'>  <button className="btn-land">Sign Up</button></a>
          <span class="spans">Not a member yet? Join Us!</span>
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
