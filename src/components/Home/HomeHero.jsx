import React from 'react';
import Data from '../../Data';
import aiImage from '../../assets/img/AI-Image.jpeg'
import {
    Container,
    HeroContainer,
    BodyContainer
} from '../StyledComponents/StyledComponents';
import Button from '../Utility/Button';

const HomeHero = () => {
    return(
        <HeroContainer
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2, delay: 1 }}
            exit={{ opacity: 0 }}
        >
            <BodyContainer>
                
                <Container width={40} rightAlign bottom={2} top={2}>
                    <img src={aiImage} width="100%" />
                </Container>

                <Container width={60} leftAlign bottom={2} top={5}>
                    <h1>{Data.home.title}</h1>
                </Container>

                <Container leftAlign bottom={3} width={50}>
                    <p>{Data.home.description}</p>
                </Container>

                <a href="/about">
                    <Button
                        route="/about"
                        text="About Me"
                        right
                    />
                </a>

            </BodyContainer>
        </HeroContainer>
    )
}

export default HomeHero;
