import React from 'react'
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../components/Title';
import styled from 'styled-components';
import PrimaryButton from '../components/PrimaryButton';

import ContactItem from '../components/ContactItem';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const ContactPage = () => {
    const phoneIcon = <PhoneIcon />
    const emailIcon = <EmailIcon />
    const locationIcon = <LocationOnIcon />
    
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactPageStyled>
                <InnerLayout className={'contact-section'}>
                    <div className='left-content'>
                        <form className='form'>
                            <div className='contact-title'>
                                <h4>Get In Touch</h4>
                            </div>
                            <div className='form-field'>
                                <label htmlFor='name'>Enter your name*</label>
                                <input id='name' type='text'/>
                            </div>
                            <div className='form-field'>
                                <label htmlFor='email'>Enter your email*</label>
                                <input id='email' type='email'/>
                            </div>
                            <div className='form-field'>
                                <label htmlFor='subject'>Enter your subject*</label>
                                <input id='subject' type='text'/>
                            </div>
                            <div className='form-field'>
                                <label htmlFor='textarea'>Enter your Message</label>
                                <textarea name='textarea' id='textarea' cols='30' rows='10'></textarea>
                            </div>
                            <div className='form-field'>
                                <PrimaryButton title={'Send email'} />
                            </div>
                        </form>
                    </div>
                    <div className={'right-content'}>
                        <ContactItem title={'Phone'} icon={phoneIcon} contact1={'+38-093-093-9393'} contact2={'+38-063-063-6363'} />
                        <ContactItem title={'Email'} icon={emailIcon} contact1={'info.loremipsum@gmail.com'} contact2={'info.loremlorem@gmail.com'} />
                        <ContactItem title={'Address'} icon={locationIcon} contact1={'27 Silk Road, California, USA'} contact2={'United States of America'} />
                    </div>
                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        .right-content {
            display: flex;
            flex-direction: column;
        }
        .contact-title{
            h4 {
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form {
            width: 100%;
            .form-field {
                width: 100%;
                margin-top: 2rem;
                position: relative;
                label {
                    position: absolute;
                    left: 20px;
                    top: -10px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding: 0 .5rem;
                    color: inherit;
                    font-size: .875rem;
                }
                input {
                    border: 1px solid var(--border-color);
                    outline: none;
                    background-color: transparent;
                    height: 2.5rem;
                    padding: 0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea {
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }
        }
    }
`;

export default ContactPage
