import React from "react";
import Data from '../../Data';
import Button from '../Utility/Button';
import Input from '../Utility/Input';
import emailjs from 'emailjs-com';

class ContactForm extends React.Component {

	sendEmail(e) {
		e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

		emailjs.sendForm('service_z4e47ot', 'template_6jyjqgp', e.target, 'user_WvCvC4ocWIPTUwaxrCF3S')
			.then((result) => {
				window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
			}, (error) => {
				console.log(error.text);
			});
	}

    render() {
		return (
			<form className="contact-form" onSubmit={this.sendEmail}>
				<Input autocomplete="on" label="Name" name={"from_name"}/>
				<Input type={"email"} autocomplete="on" label="Email" name={"from_email"}/>
				<Input autocomplete="off" label="Message" textArea />
				<Button right submit text="Send Message"/>
			</form>
		);
    }
}

export default ContactForm;
