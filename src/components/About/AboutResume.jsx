import React from 'react';
import {
    ResumeTitle,
    ResumeItem,
} from '../../components/About/StyledComponents';
import { Container } from '../StyledComponents/StyledComponents';
import Data from '../../Data';

const Resume = () => {
    return (
        <Container>
            
            <Container flex bottom={6}>
                <Container width={50} right={3} bottom={3}>
                    <h1>Experience</h1>
                    <hr  style={{color: '#000000', backgroundColor: '#000000', height: .05, borderColor : '#000000'}}/>
                </Container>
                
                <Container width={50}>
                    {Data.about.experience.map((role) => {
                        return (
                            <ResumeItem>
                                <ResumeTitle>
                                    <span>
                                        {role.title} at {role.company}
                                    </span>
                                </ResumeTitle>
                                <p>{role.date}</p>
                                <p>{role.description}</p>
                            </ResumeItem>
                        )})
                    }
                </Container>    
            </Container>

            
            <Container flex bottom={6}>
                <Container width={50} right={3} bottom={3}>
                    <h1>Education</h1>
                    <hr  style={{color: '#000000', backgroundColor: '#000000', height: .05, borderColor : '#000000'}}/>
                </Container>
                <Container width={50}>
                    {Data.about.education.map((degree) => {
                        return (
                            <ResumeItem>
                                <ResumeTitle>
                                    <span>
                                        {degree.degree} in {degree.program}
                                    </span>
                                    <p>{degree.school}, {degree.date}</p>
                                </ResumeTitle>
                                <p>{degree.result}</p>
                            </ResumeItem>
                        )})
                    }
                </Container>
            </Container>

            
            <Container flex bottom={6}>
                <Container width={50} right={3} bottom={3}>
                    <h1>Certification</h1>
                    <hr  style={{color: '#000000', backgroundColor: '#000000', height: .05, borderColor : '#000000'}}/>
                </Container>
                <Container width={50}>
                    {Data.about.certification.map((certificate) => {
                        return (
                            <ResumeItem>
                                <ResumeTitle>
                                    <span>
                                        {certificate.name}
                                    </span>
                                </ResumeTitle>
                                <p>{certificate.platform}</p>
                            </ResumeItem>
                        )})
                    }
                </Container>
            </Container>
            
            
            <Container flex bottom={6}>
                <Container width={50} right={3} bottom={3}>
                    <h1>Research</h1>
                    <hr  style={{color: '#000000', backgroundColor: '#000000', height: .05, borderColor : '#000000'}}/>
                </Container>
                <Container width={50}>
                    {Data.about.research_projects.map((paper) => {
                        return (
                            <ResumeItem>
                                <ResumeTitle>
                                    <span>
                                        {paper.name}
                                    </span>
                                </ResumeTitle>
                                <p>{paper.abstract}</p>
                                <a href={paper.link}>Link</a>
                            </ResumeItem>
                        )})
                    }
                </Container>
            </Container>
        </Container>
    );
}

export default Resume;