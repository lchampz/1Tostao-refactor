import React, {useState} from 'react';
import ImgWrapper from '../ImgWrapper';
import {Container, Filter, Filtered, FilterMenu, Aplicar, Remove,Buttons,Categorias, ApliedFilters, Ordenado , Titles, Close, Title, Text, Filters, DropDown, Search, Wrapper} from './styled'
import lupa from '../../../assets/img/lupa.png'
import filter from '../../../assets/img/filter.png'
import downArrow from '../../../assets/img/downArrow.png'
import x from '../../../assets/img/delete.png'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp, faArrowDown, faX} from '@fortawesome/free-solid-svg-icons'

const ServiceFilter = () => {

    const [sideBar, setSideBar] = useState(false);
    const [arrow, setArrow] = useState(false);
    const [arrow2, setArrow2] = useState(false);
    const [arrow3, setArrow3] = useState(false);
    const [arrow4, setArrow4] = useState(false);
    const [arrow5, setArrow5] = useState(false);
    const showSideBar = () => setSideBar(!sideBar);
    const setArrowOrientation = () => setArrow(!arrow);
    const setArrowOrientation2 = () => setArrow2(!arrow2);
    const setArrowOrientation3 = () => setArrow3(!arrow3);
    const setArrowOrientation4 = () => setArrow4(!arrow4);
    const setArrowOrientation5 = () => setArrow5(!arrow5);
    const [ordem, setOrdem] = useState(0);

    
    
    return ( 
        <>
            <Container>
                <Filter>
                    <Wrapper>
                            <ImgWrapper url={lupa} width="25px" height="25px" margin={'0px 0px 0px 10px'} cursor="pointer"/>
                            <Search  placeholder='Encontre o seu serviço...'/>
                        <DropDown onClick={showSideBar}>
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
                            <h1 id="filtered">Programação</h1>
                        </Filters>
                    </Filtered>
            </Container>
                    { sideBar === false ? <FilterMenu></FilterMenu>: 
                    <FilterMenu style={{right:"0", transition:"350ms"}}>
                        <Title>
                            <Titles >Filtrar e Organizar</Titles>
                            <FontAwesomeIcon className="close" onClick={showSideBar} icon={faX}  />
                        </Title>
                        <Title>
                            <Titles style={{fontSize:"1.2rem"}}>Filtros Aplicados</Titles>
                        </Title>
                            <ApliedFilters>
                                    <h2 id="applied-filter">Preço Menor-Maior</h2>
                                    <FontAwesomeIcon icon={faX} style={{cursor:"pointer", marginTop:"1rem", marginRight:"2rem", fontSize:"0.9rem"}} />
                                   
                            </ApliedFilters>
                        <Title>
                            <Titles style={{fontSize:"1.2rem"}} >Ordenar Por</Titles>
                            {arrow ? <FontAwesomeIcon className='flecha' onClick={setArrowOrientation} icon={faArrowUp} style={{cursor:"pointer", fontSize:"1.2rem"}} /> : <FontAwesomeIcon className='flecha' onClick={setArrowOrientation} icon={faArrowDown} style={{cursor:"pointer", fontSize:"1.2rem"}} /> }
                        </Title>
                        {arrow ? 
                        <Ordenado>
                            <h2 className='ordenado'>Mais Recentes</h2>
                            <h2 className='ordenado' >Melhor Avaliação</h2>
                            <h2 className='ordenado' >Preço Menor-Maior</h2>
                            <h2 className='ordenado' >Preço Maior-Menor</h2>
                        </Ordenado> 
                        : ""}
                       <Title>
                            <Titles style={{fontSize:"1.2rem"}}>Filtrar Por</Titles>
                            {arrow2 ? <FontAwesomeIcon className='flecha' onClick={setArrowOrientation2} icon={faArrowUp} style={{cursor:"pointer", fontSize:"1.2rem"}} /> : <FontAwesomeIcon className='flecha' onClick={setArrowOrientation2} icon={faArrowDown} style={{cursor:"pointer", fontSize:"1.2rem"}} /> }
                       </Title>
                       {arrow2 ?
                       <>
                       <Title style={{marginTop:"1.6rem"}}>
                            <Titles style={{fontSize:"1rem"}}>Categorias</Titles>
                            {arrow4 ? <FontAwesomeIcon className='flecha' onClick={setArrowOrientation4} icon={faArrowUp} style={{cursor:"pointer", fontSize:"1.2rem"}} /> : <FontAwesomeIcon className='flecha' onClick={setArrowOrientation4} icon={faArrowDown} style={{cursor:"pointer", fontSize:"1.2rem"}} /> }
                       </Title>
                       {arrow4? <Categorias>
                            <p className='categoria'>Desenho</p>
                            <input className='checkbox' type="checkbox"></input>
                            <p className='categoria'>Narração</p>
                            <input className='checkbox' type="checkbox"></input>
                            <p className='categoria'>Produção audio-visual</p>
                            <input className='checkbox' type="checkbox"></input>
                            <p className='categoria'>Fotografia</p>
                            <input className='checkbox' type="checkbox"></input>
                            <p className='categoria'>Programação</p>
                            <input className='checkbox' type="checkbox"></input>
                            <p className='categoria'>Artes</p>
                            <input className='checkbox' type="checkbox"></input>
                            <p className='categoria'>Edição</p>
                            <input className='checkbox' type="checkbox"></input>
                       </Categorias> : ""}
                        <Title style={{marginTop:"1rem"}}>
                            <Titles style={{fontSize:"1rem"}}>Tempo de Entrega</Titles>
                            {arrow3 ? <FontAwesomeIcon className='flecha' onClick={setArrowOrientation3} icon={faArrowUp} style={{cursor:"pointer", fontSize:"1.2rem"}} /> : <FontAwesomeIcon className='flecha' onClick={setArrowOrientation3} icon={faArrowDown} style={{cursor:"pointer", fontSize:"1.2rem"}} /> }
                       </Title>
                       {arrow3? <Categorias>
                            <p className='categoria'>No mesmo dia</p>
                            <input className='checkbox' type="checkbox"></input>
                            <p className='categoria'>Até 1 dia</p>
                            <input className='checkbox' type="checkbox"></input>
                            <p className='categoria'>Até 2 dias</p>
                            <input className='checkbox' type="checkbox"></input>
                            <p className='categoria'>Até 3 dias</p>
                            <input className='checkbox' type="checkbox"></input>
                            <p className='categoria'>Até uma semana</p>
                            <input className='checkbox' type="checkbox"></input>
                            <p className='categoria'>Até um mês</p>
                            <input className='checkbox' type="checkbox"></input>
                       </Categorias> : ""}
                       <Title style={{marginTop:"0.8rem"}}>
                            <Titles style={{fontSize:"1rem"}}>Preço</Titles>
                            {arrow5 ? <FontAwesomeIcon className='flecha' onClick={setArrowOrientation5} icon={faArrowUp} style={{cursor:"pointer", fontSize:"1.2rem"}} /> : <FontAwesomeIcon className='flecha' onClick={setArrowOrientation5} icon={faArrowDown} style={{cursor:"pointer", fontSize:"1.2rem"}} /> }
                       </Title>
                       {arrow5? <Categorias >
                            <p className='categoria'>Até R$20,00</p>
                            <input className='checkbox' type="checkbox"></input>
                            <p className='categoria'>R$20,00 à R$40,00</p>
                            <input className='checkbox' type="checkbox"></input>
                            <p className='categoria'>R$40,00 à R$60,00</p>
                            <input className='checkbox' type="checkbox"></input>
                            <p className='categoria'>R$60,00 à R$80,00</p>
                            <input className='checkbox' type="checkbox"></input>
                            <p className='categoria'>R$80,00 à R$100,00</p>
                            <input className='checkbox' type="checkbox"></input>
                            <p className='categoria'>Mais de R$100,00</p>
                            <input className='checkbox' type="checkbox"></input>
                       </Categorias> : ""}
                       </> : ""}

                        <Buttons>
                            <Aplicar type="submit" value='Aplicar'/>
                            <Remove>Remover Filtros X</Remove>
                        </Buttons>
                    </FilterMenu>}
        </>
     );
}


export default ServiceFilter;