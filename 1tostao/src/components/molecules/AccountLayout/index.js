import React from 'react'
import { Wrapper, Title, WrapperItems, WrapperInputs, WrapperBtns, Input, Label, IconEmpty, Button, AlterBtn } from './styled'
import { useUserAuth } from '../../../request/hooks/Auth'
import ImgWrapper from '../../atoms/ImgWrapper'

const AccountLayout = () => {
    const { user, profile } = useUserAuth()

    return (
        <Wrapper>
            <Title>Minha conta</Title>

            <WrapperItems>
                <WrapperInputs>
                    <Label>Alterar Nome</Label>
                    <Input />

                    <Label>Alterar Sobrenome</Label>
                    <Input />

                    <Label>Alterar Data de Nascimento</Label>
                    <Input />

                    <Label>Alterar Telefone</Label>
                    <Input />
                </WrapperInputs>

                <WrapperInputs className={'secondWrapper'} marginTop={'2rem'}>
                    <Label>Alterar Foto de Perfil</Label>
                    {user.photoURL ?
                    <ImgWrapper
                        width="2rem"
                        height="2rem"
                        url={user && user.photoURL ? user && user.photoURL : null}
                    /> : <IconEmpty width="150px" height="150px"/>}

                    <Label>Alterar Foto de Perfil</Label>
                    {user.photoURL ?
                    <ImgWrapper
                        width="2rem"
                        height="2rem"
                        url={user && user.photoURL ? user && user.photoURL : null}
                    /> : <IconEmpty width="550px" height="150px" resWidth="350px"/>}
                </WrapperInputs>

                <WrapperBtns>
                    <Button>Salvar</Button>

                    <AlterBtn color={"#E4D54B"}>Alterar meu login</AlterBtn>
                    <AlterBtn color={"#E44B4B"}>Deletar minha conta</AlterBtn>
                </WrapperBtns>
            </WrapperItems>
        </Wrapper>
    );
}
 
export default AccountLayout;