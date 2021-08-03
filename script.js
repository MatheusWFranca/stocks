const search = document.querySelector('.form-busca');

search.addEventListener('submit', handleRequest)

async function handleRequest(event) {
  event.preventDefault();

  let input = document.querySelector('#input-stock').value
  let url = await fetch(`https://cloud.iexapis.com/stable/stock/${encodeURI(input)}/quote?token=sk_3ac791193ee640778120e25800c3573f`)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      data({
        company: json.companyName,
        volume: json.avgTotalVolue,
        price: json.extendedPrice
      }) 
    })  
}