import React from 'react';
import {Wrapper, Send, Card, Forms,Botao, ButtonDiv,  FormMessage, Message, Label} from './styled'

const Contact = () => {
    return ( 
        <>
            <Wrapper>
                <Send>Envie-nos uma mensagem!</Send>
                <Card>
                    <Forms>
                        <Label>Assunto</Label>
                        <FormMessage type="text"></FormMessage>
                        <Label>Mensagem</Label>
                        <Message></Message>
                        <ButtonDiv>
                            <Botao>Enviar</Botao>
                        </ButtonDiv>
                    </Forms>
                </Card>
            </Wrapper>
        </>
     );
}
 
export default Contact;