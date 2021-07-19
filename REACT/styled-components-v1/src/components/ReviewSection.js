import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from './Title';
import ReviewItem from './ReviewItem';

const ReviewSection = () => {
    return (
        <ReviewSectionStyled>
            <Title title={'Reviews'} span={'Reviews'} />
            <InnerLayout>
                <div className='reviews'>
                    <ReviewItem 
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid blanditiis itaque cum.'}
                    />
                    <ReviewItem 
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid blanditiis itaque cum.Lorem ipsum dolor sit.'}
                    />
                </div>
            </InnerLayout>
        </ReviewSectionStyled>
    )
}

const ReviewSectionStyled = styled.section`
    .reviews {
        display: flex;

    }
`;

export default ReviewSection
