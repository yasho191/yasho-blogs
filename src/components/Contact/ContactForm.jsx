import React from "react";
import Data from '../../Data';
import Button from '../Utility/Button';
import Input from '../Utility/Input';
import emailjs from 'emailjs-com';

class ContactForm extends React.Component {

	sendEmail(e) {
		e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

		emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
			.then((result) => {
				window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
			}, (error) => {
				console.log(error.text);
			});
	}

    render() {
		return (
			<form action={Data.contact.formspree} method="POST">
				<Input autocomplete="off" label="Name" />
				<Input autocomplete="on" label="Email" />
				<Input autocomplete="off" label="Message" textArea />
				<Button right submit text="Send Message"/>
			</form>
		);
    }
}

export default ContactForm;
