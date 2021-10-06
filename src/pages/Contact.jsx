import React from 'react';
import {
    BodyContainer,
    Container,
    HeroContainer
} from '../components/StyledComponents/StyledComponents';
import Navigation from '../components/Navigation/Navigation.jsx';
import ContactForm from '../components/Contact/ContactForm.jsx';
import Footer from '../components/Footer/Footer.jsx';
import InLineLink from '../components/Utility/Link';
import MyBitemoji from '../assets/img/Bitemoji.jpeg';
import Data from '../Data';

const Contact = () => {
    return (
        <>
            <Navigation page="contact" />
            <BodyContainer>
                <HeroContainer
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 2, delay: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Container flex top={10}>
                        <Container width={50} bottom={6} right={2}>
                            <h1>{Data.contact.title}</h1>
                            <p width="100%" style={{lineBreak: "break-line"}}>{Data.contact.description} {Data.contact.email} .</p>
                            <Container width={50} bottom={6} right={2}>
                                <img src={MyBitemoji} width="100%"/>
                            </Container>
                        </Container>
                        <Container width={50} right={2}>
                            <ContactForm />
                        </Container>
                    </Container>
                </HeroContainer>
            </BodyContainer>
            <Footer />
        </>
    );
}

export default Contact;
