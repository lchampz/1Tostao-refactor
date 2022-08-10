import React from 'react';
import ImgWrapper from '../ImgWrapper';
import {Container, Filter, Filtered, Text, Filters, DropDown, Search, Wrapper} from './styled'
import lupa from '../../../assets/img/lupa.png'
import filter from '../../../assets/img/filter.png'
import downArrow from '../../../assets/img/downArrow.png'
import x from '../../../assets/img/delete.png'


const ServiceFilter = () => {
    return ( 
        <>
            <Container>
                <Filter>
                    <Wrapper>
                            <ImgWrapper url={lupa} width="25px" height="25px" margin={'0px 0px 0px 10px'} cursor="pointer"/>
                            <Search  placeholder='Encontre o seu serviço...'/>
                        <DropDown>
                            <ImgWrapper url={filter} width="25px" height="25px" margin={'0px 0px 0px 20px'}/>
                            <Text>Filtrar</Text>
                            <ImgWrapper url={downArrow} width="25px" height="25px" margin={'0px 10px 0px 10px'} />
                        </DropDown>
                    </Wrapper>
                </Filter>
                    <Filtered>
                        <h1 id="filter" >Filtrado por:</h1>
                        <Filters>
                            <ImgWrapper url={x} width="15px" height="15px" margin={'0px 15px 0px 10px'} cursor="pointer"/>
                            <h1 id="filtered">Tecnologia</h1>
                        </Filters>
                    </Filtered>
            </Container>
        </>
     );
}


export default ServiceFilter;