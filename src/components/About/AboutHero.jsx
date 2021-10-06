import React from 'react';
import {
    Container,
    HeroContainer
} from '../StyledComponents/StyledComponents';
import SocialButtons from "../Social/SocialButtons";
import Data from '../../Data';
import MyImage from '../../assets/img/YashowardhanShinde.jpeg'


const AboutHero = () => {
    return(
        <HeroContainer
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2, delay: 1 }}
            exit={{ opacity: 0 }}
        >
            <div>
                <Container bottom={3} top={3}>
                    <h1>{Data.about.title}</h1>
                </Container>
                <Container width={40} rightAlign bottom={1}>
						<img src={MyImage} style={{borderRadius: "50%"}} width="100%"/>
				</Container>
                <SocialButtons />
                <Container leftAlign width={50} right={3} top={5}>
                    <h1>Resume</h1>
                    <h3>Name: Yashowardhan Shinde</h3>
                    <h3>Age: 20</h3>
                    <h3>Email: yashowardhanshinde@gmail.com</h3>
                    <h3>Contact: +919359139622</h3>
                    <p>AI Machine Learning and Deep Learning Enthusiast</p>
                </Container>
                
            </div>
            
        </HeroContainer>
        
    )
}

export default AboutHero;
