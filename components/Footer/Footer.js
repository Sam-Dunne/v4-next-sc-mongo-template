import React from 'react';
import { FooterContainer, FooterCopy, FooterImagesContainer, FooterImageWrapper, FooterImage } from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterImagesContainer>
                {/* <a href='https://www.linkedin.com/in/samdunnewebdev/' rel='noopener noreferrer' target='_blank'>
                    <FooterImageWrapper>
                        <FooterImage src="/LI-In-Bug.png" alt="linkedIn logo" width={635} height={540} objectFit="cover" layout='responsive' />
                    </FooterImageWrapper>
                </a> */}
                <FooterCopy>This site is built with NextJS<br></br> and Styled-Components</FooterCopy>
                {/* <a href='https://github.com/Sam-Dunne/portfolio-next-styledcomponents' rel='noopener noreferrer' target='_blank'>
                    <FooterImageWrapper>
                        <FooterImage src="/GitHub-Mark-120px-plus.png" alt="github logo" width={120} height={120} objectFit="cover" layout='responsive' />
                    </FooterImageWrapper>
                </a> */}
            </FooterImagesContainer>
        </FooterContainer>
    )
}

export default Footer
