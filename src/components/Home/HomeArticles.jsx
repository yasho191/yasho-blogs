import React from 'react';
import Posts from "../../posts/Posts";
import AnalyticsPosts from '../../posts/AnalyticsPosts';
import Article from '../Article/Article';
import AnalyticsArticles from '../Article/AnalyticsArticle';
import { BodyContainer, Container } from "../StyledComponents/StyledComponents";

const HomeProjects = () => {
    return(
        <BodyContainer>
            <Container top={1}>
                <Container leftAlign bottom={2}>
                    <h2>My Articles</h2>
                </Container>
                {Posts.map((project) => {
                    return (
                        <Article
                            route={project.route}
                            author={project.author}
                            thumbnail={project.image}
                            title={project.title}
                            date={project.date}
                            description={project.description}
                        />
                    )})
                }
            </Container>

            <Container top={5}>
                <Container leftAlign bottom={2}>
                    <h2>My Articles Published on Different Blog Sites</h2>
                </Container>
                {AnalyticsPosts.map((project) => {
                    return (
                        <AnalyticsArticles
                            route={project.route}
                            author={project.author}
                            thumbnail={project.image}
                            title={project.title}
                            date={project.date}
                            description={project.description}
                        />
                    )})
                }
            </Container>
        </BodyContainer>
    )
}

export default HomeProjects;
