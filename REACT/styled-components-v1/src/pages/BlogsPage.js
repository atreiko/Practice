import React from 'react';
import Title from '../components/Title';
import blogs from '../data/blogs';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';

const BlogsPage = () => {
    return (
        <MainLayout>
            <BlogsPageStyled>
            <Title title={'Blogs'} span={'Blogs'}/>
                <InnerLayout className={'blog'}>
                    {
                        blogs.map((blog) => {
                            const {id, title, image, link} = blog
                            return (
                                <div key={id} className={'blog-item'}>
                                    <div className='image'>
                                        <img src={image} alt={title} />
                                    </div>
                                    <div className='title'>
                                        <a href={link}>{title}</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </InnerLayout> 
            </BlogsPageStyled>
        </MainLayout>
    )
}

const BlogsPageStyled = styled.div`
    .blog {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
        padding: 2rem 1rem;
        .blog-item {
            background-color: var(--background-dark-grey);
            padding: 1rem;
            /* overflow: hidden; */
        }
        .image {
            width: 100%;
            height: 90%;
            overflow: hidden;
            img {
                width: 100%;
                height: 90%;
                object-fit: cover;
                transition: all .4s ease-in-out;
                &:hover {
                    cursor: pointer;
                    transform: rotate(1deg) scale(1.1);
                }
            }
        }
        .title {
            a {
                font-size: 1.5rem;
                padding: .5rem 0;
                color: var(--white-color);
                transition: all .4s ease-in-out;
                &:hover {
                    color: var(--primary-color);
                    transition: all .4s ease-in-out;
                }
            }
        }
        .link {

        }
    }
`;

export default BlogsPage
