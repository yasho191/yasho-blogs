import React from 'react';
import marked from 'marked';
import {
    BodyContainer,
    Container,
    Image
} from '../../components/StyledComponents/StyledComponents';
import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import SocialButtons from '../Social/SocialButtons';
import LikeButton from '../Utility/LikeButton';
import MyBitemoji from '../../assets/img/Bitemoji.jpeg'


class BlogPost extends React.Component {

    state = {
        markdown: ''
    }

    componentDidMount() {
        
        fetch(this.props.content)
            .then(response => {
                return response.text()
            })
            .then(text => {
                this.setState({
                    markdown: marked(text)
                })
            })
    }

    render() {

        const { markdown } = this.state;

        return (
            <Container>
                <ProgressBar />
                <Navigation />
                <BodyContainer>
                    <Container small top={12}>
                            
                            <h1>{this.props.title}</h1>
                            <img src={MyBitemoji} width="10%" style={{padding:"5px", borderRadius: "50%", float: "right"}}/>
                            <p>Date: {this.props.date} <br/> Author: {this.props.author}</p>
                            
                        <SocialButtons/>
                        <Image src={this.props.image} />
                        {console.log(markdown)}
                        <div id={`post_${this.props.id}`} dangerouslySetInnerHTML={{__html: markdown}}></div>
                        <div style={{position: "relative"}}>
                            <div style={{display: "inline-block", padding: "5px"}}><LikeButton type="fa fa-thumbs-o-up fa-2x"/></div> 
                            <div style={{display: "inline-block"}}><LikeButton type="fa fa-heart-o fa-2x" /></div>
                        </div>
                    </Container>
                </BodyContainer>
                <Footer />
		    </Container>
        )
    }



}

export default BlogPost;