import React, { useState } from 'react'
import { device } from '../device';
import { Container, HeaderTitle, LinkGrid, Input, Label, TextArea } from '../globalstyle';
import Head from 'next/head';
import styled from 'styled-components';
import 'isomorphic-fetch';

const FormItem = styled.div`
    margin: 0px auto 10px auto;
    
    @media ${device.tablet} {
    } 
    @media ${device.laptopL} {
    } 
`;

const ContactForm = styled.form`  
    margin: 20px auto;
    width: 18em;
    padding: 1em 2em;
    border: 2px solid gray;
    border-radius:15px;
    background: rgb(140,26,255);
    background: linear-gradient(45deg, rgba(140,26,255,1) 30%, rgba(152,26,255,0.9587185215883228) 71%);
    @media ${device.tablet} {
        width: 24em;

    } 
    @media ${device.laptopL} {
        width: 36em;
        height: 30em;
    } 
`;

const Submit = styled.button`
    margin: 1em auto 0 auto;
    box-sizing: border-box;
    background-color: #f3ecfa;
    text-align: center;
    outline: none;
    padding: 1rem 2rem;
    border-radius: 15px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    color: #6600CC;
    box-shadow: 2px 2px 3px 3px rgba(0,0,0,0.28);
-webkit-box-shadow: 2px 2px 3px 3px rgba(0,0,0,0.28);
-moz-box-shadow: 2px 2px 3px 3px rgba(0,0,0,0.28);

    transition:
        background-color 100ms ease-in,
        transform 100ms ease-in;
    &:active {
        transform: scale(0.9);
    }
    &:focus {
        box-shadow: 6px 6px 8px 0px rgba(0,0,0,0.75);
        transform: scale(1.04);
    }
    &:hover {
        box-shadow: 6px 6px 8px 0px rgba(0,0,0,0.75);
        transform: scale(1.04);
    }
    
    @media ${device.tablet} {
    } 
    @media ${device.laptopL} {
    } 
`;

const Contact = ({ small }) => {
    const [from, setFrom] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!from || !subject || !message) {
            alert('All fields required')
            return
        }
        try {
            fetch('/api/contact', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ from, subject, message })
            })
                .then(res => {
                    // alert('Thanks for the Message!', `${res.newEmail.from}`)
                    console.log(res.json())
                    setFrom('');
                    setSubject('');
                    setMessage('')
                })

        } catch (error) {
            console.log(error);
            res.status(400);
        }
    }

    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <Container>
            <HeaderTitle>Contact</HeaderTitle>
                <ContactForm>
                    <FormItem>
                        <Label htmlFor='Your Email'>Your Email</Label>
                        <Input type='email' value={from} onChange={(e) => { setFrom(e.target.value) }} />
                    </FormItem>
                    <FormItem>
                        <Label >Subject</Label>
                        <Input name='subject' value={subject} onChange={(e) => { setSubject(e.target.value) }} />
                    </FormItem>
                    <FormItem>
                        <Label htmlFor='message'>Message</Label>
                        <TextArea rows={6} type='text' name='message' value={message} onChange={(e) => { setMessage(e.target.value) }} />
                    </FormItem>
                    <FormItem>
                        <Submit primary type='submit' onClick={(e) => { handleSubmit(e) }}>Send</Submit>
                    </FormItem>
                </ContactForm >
            
            </Container>





        </>
    )
}

export default Contact