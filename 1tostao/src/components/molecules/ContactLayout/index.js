import React, { useRef, useState, useEffect } from 'react';
import {Wrapper, Send, Card, Forms, Botao, ButtonDiv,  FormMessage, Message, Label} from './styled'
import emailjs from '@emailjs/browser';

const Contact = () => {
  
    const form = useRef();
    const [email, setEmail] = useState("");
    const [assunto, setAssunto] = useState("");
    const [mensagem, setMensagem] = useState("");
    const aviso = document.getElementById("aviso");
    const sendEmail = (e) => {
        e.preventDefault();
                emailjs.sendForm('service_sjivoln', 'template_k0l3cdu', form.current, 'IZ9MwYC4-q08MezXL')
                .then((result) => {
                aviso.innerHTML = "Mensagem enviada com sucesso!";
                e.target.reset();
                setEmail("");
                setAssunto("");
                setMensagem("");
            }, (error) => {
                aviso.innerHTML = "Erro ao enviar mensagem! Preencha todos os campos corretamente.";
                e.target.reset();
                setEmail("");
                setAssunto("");
                setMensagem("");
            });

    };
    return ( 
        <>
            <Wrapper>
                <Send>Envie-nos uma mensagem!</Send>
                <Card>
                    <form ref={form} onSubmit={sendEmail}>
                        <Forms>
                                <Label>Seu email</Label>
                                <FormMessage type="email" onChange={(e) => setEmail(e.target.value) } value={email} name="user_email" autoComplete='off' ></FormMessage>
                                <Label>Assunto</Label>
                                <FormMessage type="text" onChange={(e) => setAssunto(e.target.value)} value={assunto} name="user_name" autoComplete='off' ></FormMessage>
                                <Label>Mensagem</Label>
                                <Message onChange={(e) => setMensagem(e.target.value)} value={mensagem} name="message" autoComplete='off' ></Message>
                                <ButtonDiv>
                                    {email.length && assunto.length && mensagem.length > 1 ? <Botao id="botao" className="ativado" type="submit" placeholder='Enviar'  style={{color: "#24d39a", border: "3px solid #24d39a", cursor:"pointer"}} />: <Botao id="botao" type="submit" className='desativado' placeholder='Enviar' disabled/>}
                                </ButtonDiv>
                        </Forms>
                    </form>
                </Card>
                    <p id='aviso'></p>
            </Wrapper>
         
        </>
     );
}
 
export default Contact;