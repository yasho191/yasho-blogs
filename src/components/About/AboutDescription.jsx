import React from 'react';
import { Container } from '../StyledComponents/StyledComponents';
import Data from '../../Data';

const AboutHero = () => {
    return(
        <Container >
            
            <Container flex bottom={6}>
                <Container width={50} right={3} bottom={3}>
                    <h1>About</h1>
                    <hr  style={{color: '#000000', backgroundColor: '#000000', height: .05, borderColor : '#000000'}}/>
                </Container>
                <Container width={50}>
                    <p>{Data.about.description}</p>
                </Container>
            </Container>
        </Container>

    )
}

export default AboutHero;
