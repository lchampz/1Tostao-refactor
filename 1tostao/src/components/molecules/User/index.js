import React from 'react';
// import opinions from '../../../fixtures/opinions.json'
import {Container, Title, Text, Pane, Image} from './styled'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencil} from '@fortawesome/free-solid-svg-icons'
// import {faStar} from '@fortawesome/free-solid-svg-icons'

const User = () => {
    return ( 
        <>
        

        <Container >
            <User.Title>
                Opiniões dos nossos usuários: 
            </User.Title>
            <User.Text>
                "O 1Tostão foi bem prático e simples de se utilizar, simplesmente adorei a minha experiência com o site."
                <FontAwesomeIcon className="icon" icon={faPencil} />
            </User.Text>
            {/* <User.Pane>
              <User.Image src={item.image} alt={item.alt}></User.Image>
          </User.Pane> */}
    </Container> 
        </>
    );
}

User.Title = function UserTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
};
User.Text = function UserText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
};

User.Pane = function UserPane({children, ...restProps}){
    return <Pane {...restProps}>{children}</Pane>
  };

User.Image = function UserImage({...restProps}){
    return <Image {...restProps}></Image>
  }

export default User;