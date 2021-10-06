import FirstBlogPost from '../posts/Skewness.md'
import FirstBlogPostImage from '../assets/img/Skweness/CoverPhotoSkewness.jpeg'
import FirstBlogPostImage_1 from '../assets/img/Skweness/img-1.png'
import FirstBlogPostImage_2 from '../assets/img/Skweness/img-2.png'
import FirstBlogPostImage_3 from '../assets/img/Skweness/img-3.png'
import FirstBlogPostImage_4 from '../assets/img/Skweness/img-4.png'

import SecondBlogPost from '../posts/Correlation.md'
import SecondBlogPostImage from '../assets/img/Correlation/CoverPhotoCorrelation.png'
import SecondBlogPostImage_1 from '../assets/img/Correlation/img-1.png'
import SecondBlogPostImage_2 from '../assets/img/Correlation/img-2.png'
import SecondBlogPostImage_3 from '../assets/img/Correlation/img-3.png'

const Posts = [
    {
        title: "What is skewness in data? How to fix skewed data in Python?",
        date: "October 3, 2021",
        author: "Yashowardhan Shinde",
        description: "We all have come across the terms outliers or skewness while cleaning or preprocessing data for a project. So, in this article, we will be discussing the following points:",
        image: FirstBlogPostImage,
        content: FirstBlogPost,
        route: "skewness-in-data"
    },
    {
        title: "How to find the correlation between continuous variables and visualise it using python?",
        date: "October 4, 2021",
        author: "Yashowardhan Shinde",
        description: "Feature selection is an important step in building a good machine learning model, one of the technique that helps us in selecting these features is checking the correlation between different features of the dataset.",
        image: SecondBlogPostImage,
        content: SecondBlogPost,
        route: "correlation"
    },
]

export default Posts;