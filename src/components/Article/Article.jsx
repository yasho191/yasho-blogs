import React from 'react';
import {
    Container,
    CaseLink,
    CaseStudyContainer,
    CaseStudyContent,
    CaseStudyImage
} from '../StyledComponents/StyledComponents';
import { ClientText } from "./Style";
import Button from '../Utility/Button';
import { Fade } from 'react-awesome-reveal';

const Project = (props) => {
    return (
        <Fade direction="top" duration={1000} triggerOnce cascade>
            <CaseLink href={props.route} target={props.newTab ? '_blank' : null} rel={"noreferrer noopener"}>
                <CaseStudyContainer>
                    <CaseStudyContent>
                        <Container flexRow leftAlign>
                            <ClientText><p style={{color: "black"}}> {props.date} <br/> {props.author} </p></ClientText>
                        </Container>
                        
                        <div>
                            <h2>{props.title}</h2>
                            <p style={{color: "black"}}>{props.description}</p>
                        </div>

                        <Button
                            right
                            text="Read More"
                            route={props.route}
                        />
                    </CaseStudyContent>
                    <CaseStudyImage background={props.color}>
                        <img src={props.thumbnail} alt=""/>
                    </CaseStudyImage>
                </CaseStudyContainer>
            </CaseLink>
        </Fade>
    );
}

export default Project;