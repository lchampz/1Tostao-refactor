import React, { useRef, useState } from 'react';
import {Wrapper, Send, Card, Forms,Botao, ButtonDiv,  FormMessage, Message, Label} from './styled'
import emailjs from '@emailjs/browser';

const Contact = () => {
  
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sjivoln', 'template_k0l3cdu', form.current, 'IZ9MwYC4-q08MezXL')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    };
    return ( 
        <>
            <Wrapper>
                <Send>Envie-nos uma mensagem!</Send>
                <Card>
                    <form ref={form} onSubmit={sendEmail}>
                        <Forms>
                                <Label>Assunto</Label>
                                <FormMessage type="text" name="user_name"></FormMessage>
                                <Label>Mensagem</Label>
                                <Message name="message"></Message>
                                <ButtonDiv>
                                    <Botao>Enviar</Botao>
                                </ButtonDiv>
                        </Forms>
                    </form>
                </Card>
            </Wrapper>
        </>
     );
}
 
export default Contact;