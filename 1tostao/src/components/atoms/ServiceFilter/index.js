import React, { useState } from "react";
import ImgWrapper from "../ImgWrapper";
import {
  Container,
  Filter,
  Filtered,
  FilterMenu,
  Aplicar,
  Remove,
  Buttons,
  Categorias,
  ApliedFilters,
  Ordenado,
  Titles,
  Close,
  Title,
  Text,
  Filters,
  DropDown,
  Search,
  Wrapper,
} from "./styled";
import lupa from "../../../assets/img/lupa.png";
import filterr from "../../../assets/img/filter.png";
import downArrow from "../../../assets/img/downArrow.png";
import x from "../../../assets/img/delete.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown, faX } from "@fortawesome/free-solid-svg-icons";
import { useService } from "../../../request/hooks/Services";
import { reload } from "firebase/auth";

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
  const {
    getServicesFiltered,
    removeFilter,
    getServiceSearch,
    getServicesFilteredByPrice,
    sortByPriceMenor,
    getServicesFilteredByTime,
    sortByPriceMaior,
  } = useService();
  const [border, setBorder] = useState();
  const [filtrado, setFiltrado] = useState(0);
  const [filtragem, setFiltragem] = useState();

  return (
    <>
      <Container>
        <h1
          style={{
            fontSize: "2.2rem",
            color: "#eee",
            marginTop: "1rem",
            marginBottom: "-2.5rem",
            marginLeft: "0",
          }}
        >
          Serviços
        </h1>
        <Filter>
          <Wrapper>
            <ImgWrapper
              url={lupa}
              width="25px"
              height="25px"
              margin={"0px 0px 0px 10px"}
              cursor="pointer"
            />
            <Search
              type="text"
              onChange={(e) => {
                getServiceSearch(e.target.value);
              }}
              placeholder="Encontre o seu serviço..."
            />

            <DropDown onClick={showSideBar}>
              <ImgWrapper
                url={filterr}
                width="25px"
                height="25px"
                margin={"0px 0px 0px 20px"}
              />
              <Text>Filtrar</Text>
              <ImgWrapper
                url={downArrow}
                width="25px"
                height="25px"
                margin={"0px 10px 0px 10px"}
              />
            </DropDown>
          </Wrapper>
        </Filter>
        {filtrado === 1 ? (
          <Filtered>
            <h1 id="filter">Filtrado por:</h1>
            <Filters
              style={{ cursor: "pointer" }}
              onClick={() => {
                setFiltrado(0);
                removeFilter();
              }}
            >
              <ImgWrapper
                url={x}
                width="15px"
                height="15px"
                margin={"0px 15px 0px 10px"}
                cursor="pointer"
              />
              <h1 id="filtered">{filtragem}</h1>
            </Filters>
          </Filtered>
        ) : (
          ""
        )}
      </Container>
      {sideBar === false ? (
        <FilterMenu></FilterMenu>
      ) : (
        <FilterMenu style={{ right: "0", transition: "350ms" }}>
          <Title>
            <Titles>Filtrar e Organizar</Titles>
            <FontAwesomeIcon
              className="close"
              onClick={showSideBar}
              icon={faX}
            />
          </Title>
          <Title>
            <Titles style={{ fontSize: "1.2rem" }}>Filtros Aplicados</Titles>
          </Title>
          {filtrado === 1 ? (
            <ApliedFilters
              onClick={() => {
                setFiltrado(0);
                removeFilter();
              }}
            >
              <h1 id="applied-filter">{filtragem}</h1>
              <FontAwesomeIcon
                icon={faX}
                style={{
                  cursor: "pointer",
                  marginTop: "1rem",
                  marginRight: "2rem",
                  fontSize: "0.9rem",
                }}
              />
            </ApliedFilters>
          ) : (
            <ApliedFilters>
              <h1 id="applied-filter">Nenhum filtro aplicado!</h1>
            </ApliedFilters>
          )}
          <Title>
            <Titles style={{ fontSize: "1.2rem" }}>Ordenar Por</Titles>
            {arrow ? (
              <FontAwesomeIcon
                className="flecha"
                onClick={setArrowOrientation}
                icon={faArrowUp}
                style={{ cursor: "pointer", fontSize: "1.4rem" }}
              />
            ) : (
              <FontAwesomeIcon
                className="flecha"
                onClick={setArrowOrientation}
                icon={faArrowDown}
                style={{ cursor: "pointer", fontSize: "1.4rem" }}
              />
            )}
          </Title>
          {arrow ? (
            <Ordenado>
              <h2
                className="ordenado"
                onClick={() => {
                  setFiltragem("Mais Recentes");
                  setFiltrado(1);
                  showSideBar();
                }}
              >
                Mais Recentes
              </h2>
              {/* <h2 className="ordenado1">Melhor Avaliação</h2> */}
              <h2
                className="ordenado2"
                onClick={() => {
                  sortByPriceMenor();
                  setFiltragem("Preço Menor-Maior");
                  setFiltrado(1);
                  showSideBar();
                }}
              >
                Preço Menor-Maior
              </h2>
              <h2
                className="ordenado3"
                onClick={() => {
                  sortByPriceMaior();
                  setFiltragem("Preço Maior-Menor");
                  setFiltrado(1);
                  showSideBar();
                }}
              >
                Preço Maior-Menor
              </h2>
            </Ordenado>
          ) : (
            ""
          )}
          <Title>
            <Titles style={{ fontSize: "1.2rem" }}>Filtrar Por</Titles>
            {arrow2 ? (
              <FontAwesomeIcon
                className="flecha"
                onClick={setArrowOrientation2}
                icon={faArrowUp}
                style={{ cursor: "pointer", fontSize: "1.4rem" }}
              />
            ) : (
              <FontAwesomeIcon
                className="flecha"
                onClick={setArrowOrientation2}
                icon={faArrowDown}
                style={{ cursor: "pointer", fontSize: "1.4rem" }}
              />
            )}
          </Title>
          {arrow2 ? (
            <>
              <Title style={{ marginTop: "1.6rem" }}>
                <Titles style={{ fontSize: "1rem" }}>Categorias</Titles>
                {arrow4 ? (
                  <FontAwesomeIcon
                    className="flecha"
                    onClick={setArrowOrientation4}
                    icon={faArrowUp}
                    style={{ cursor: "pointer", fontSize: "1.2rem" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="flecha"
                    onClick={setArrowOrientation4}
                    icon={faArrowDown}
                    style={{ cursor: "pointer", fontSize: "1.2rem" }}
                  />
                )}
              </Title>
              {arrow4 ? (
                <Categorias>
                  <p
                    className="categoria"
                    onClick={() => {
                      getServicesFiltered("categoria", "Desenho");
                      setFiltragem("Desenho");
                      setFiltrado(1);
                      showSideBar();
                    }}
                  >
                    Desenho
                  </p>
                  <p
                    className="categoria"
                    onClick={() => {
                      getServicesFiltered("categoria", "Narração");
                      setFiltragem("Narração");
                      setFiltrado(1);
                      showSideBar();
                    }}
                  >
                    Narração
                  </p>
                  <p
                    className="categoria"
                    onClick={() => {
                      getServicesFiltered("categoria", "Produção audio-visual");
                      setFiltragem("Produção audio-visual");
                      setFiltrado(1);
                      showSideBar();
                    }}
                  >
                    Produção audio-visual
                  </p>
                  <p
                    className="categoria"
                    onClick={() => {
                      getServicesFiltered("categoria", "Fotografia");
                      setFiltragem("Fotografia");
                      setFiltrado(1);
                      showSideBar();
                    }}
                  >
                    Fotografia
                  </p>
                  <p
                    className="categoria"
                    onClick={() => {
                      getServicesFiltered("categoria", "Programação");
                      setFiltragem("Programação");
                      setFiltrado(1);
                      showSideBar();
                    }}
                  >
                    Programação
                  </p>
                  <p
                    className="categoria"
                    onClick={() => {
                      getServicesFiltered("categoria", "Artes");
                      setFiltragem("Artes");
                      setFiltrado(1);
                      showSideBar();
                    }}
                  >
                    Artes
                  </p>
                  <p
                    className="categoria"
                    onClick={() => {
                      getServicesFiltered("categoria", "Edição");
                      setFiltragem("Edição");
                      setFiltrado(1);
                      showSideBar();
                    }}
                  >
                    Edição
                  </p>
                </Categorias>
              ) : (
                ""
              )}
              <Title style={{ marginTop: "1rem" }}>
                <Titles style={{ fontSize: "1rem" }}>Tempo de Entrega</Titles>
                {arrow3 ? (
                  <FontAwesomeIcon
                    className="flecha"
                    onClick={setArrowOrientation3}
                    icon={faArrowUp}
                    style={{ cursor: "pointer", fontSize: "1.2rem" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="flecha"
                    onClick={setArrowOrientation3}
                    icon={faArrowDown}
                    style={{ cursor: "pointer", fontSize: "1.2rem" }}
                  />
                )}
              </Title>
              {arrow3 ? (
                <Categorias>
                  <p
                    className="categoria"
                    onClick={() => {
                      getServicesFilteredByTime(1);
                      setFiltragem("Até 1 dia");
                      setFiltrado(1);
                      showSideBar();
                    }}
                  >
                    Até 1 dia
                  </p>

                  <p
                    className="categoria"
                    onClick={() => {
                      getServicesFilteredByTime(2);
                      setFiltragem("Até 2 dias");
                      setFiltrado(1);
                      showSideBar();
                    }}
                  >
                    Até 2 dias
                  </p>

                  <p
                    className="categoria"
                    onClick={() => {
                      getServicesFilteredByTime(3);
                      setFiltragem("Até 3 dias");
                      setFiltrado(1);
                      showSideBar();
                    }}
                  >
                    Até 3 dias
                  </p>

                  <p
                    className="categoria"
                    onClick={() => {
                      getServicesFilteredByTime(7);
                      setFiltragem("Até uma semana");
                      setFiltrado(1);
                      showSideBar();
                    }}
                  >
                    Até uma semana
                  </p>

                  <p
                    className="categoria"
                    onClick={() => {
                      getServicesFilteredByTime(30);
                      setFiltragem("Até um mês");
                      setFiltrado(1);
                      showSideBar();
                    }}
                  >
                    Até um mês
                  </p>
                </Categorias>
              ) : (
                ""
              )}
              <Title style={{ marginTop: "0.8rem" }}>
                <Titles style={{ fontSize: "1rem" }}>Preço</Titles>
                {arrow5 ? (
                  <FontAwesomeIcon
                    className="flecha"
                    onClick={setArrowOrientation5}
                    icon={faArrowUp}
                    style={{ cursor: "pointer", fontSize: "1.2rem" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="flecha"
                    onClick={setArrowOrientation5}
                    icon={faArrowDown}
                    style={{ cursor: "pointer", fontSize: "1.2rem" }}
                  />
                )}
              </Title>
              {arrow5 ? (
                <Categorias>
                  <p
                    className="categoria"
                    onClick={() => {
                      getServicesFilteredByPrice("<=", 20);
                      setFiltragem("Até R$20,00");
                      setFiltrado(1);
                      showSideBar();
                    }}
                  >
                    Até R$20,00
                  </p>

                  <p
                    className="categoria"
                    onClick={() => {
                      getServicesFilteredByPrice("<=", 40);
                      setFiltragem("Até R$40,00");
                      setFiltrado(1);
                      showSideBar();
                    }}
                  >
                    Até R$40,00
                  </p>

                  <p
                    className="categoria"
                    onClick={() => {
                      getServicesFilteredByPrice("<=", 60);
                      setFiltragem("Até R$60,00");
                      setFiltrado(1);
                      showSideBar();
                    }}
                  >
                    Até R$60,00
                  </p>

                  <p
                    className="categoria"
                    onClick={() => {
                      getServicesFilteredByPrice("<=", 80);
                      setFiltragem("Até R$80,00");
                      setFiltrado(1);
                      showSideBar();
                    }}
                  >
                    Até R$80,00
                  </p>

                  <p
                    className="categoria"
                    onClick={() => {
                      getServicesFilteredByPrice("<=", 100);
                      setFiltragem("Até R$100,00");
                      setFiltrado(1);
                      showSideBar();
                    }}
                  >
                    Até R$100,00
                  </p>

                  <p
                    className="categoria"
                    onClick={() => {
                      getServicesFilteredByPrice(">", 100);
                      setFiltragem("Mais de R$100,00");
                      setFiltrado(1);
                      showSideBar();
                    }}
                  >
                    Mais de R$100,00
                  </p>
                </Categorias>
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}

          <Buttons>
            <Remove
              onClick={() => {
                removeFilter();
                setFiltrado(0);
                removeFilter();
              }}
              style={{ marginBottom: "1rem" }}
            >
              Remover Filtros X
            </Remove>
          </Buttons>
        </FilterMenu>
      )}
    </>
  );
};

export default ServiceFilter;
