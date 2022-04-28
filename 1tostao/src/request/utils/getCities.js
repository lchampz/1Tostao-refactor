export async function getCities(setState) {
    await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes')
    .then((state) => state.json())
    .then((json) => {
        if(json) return setState(json)
        if(json === null || json === undefined) return console.log('[ERROR - getStates()]')
    })
}


