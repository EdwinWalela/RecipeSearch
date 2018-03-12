import React from 'react';
import Header from './header';
import NavBar from './navbar';
import Footer from './footer';


const About = () => {
	return (
		<div>
			<NavBar />
			<Header title="Get in touch" />
			<p className="issue">Something is missing? Having trouble? Ideas? Get in touch.</p>
				<form className="abt-form" action="https://formspree.io/edwinwalela@gmail.com"
      		method="POST">
      		<input className="search-input" type="email" placeholder="E-mail address..." name="_replyto"/>
					<textarea id="msg" type="textarea" name="name" placeholder="Your message..."/>
					<input id="send" type="submit" value="Send"/>
			</form>
		</div>
	);
}

export default About;