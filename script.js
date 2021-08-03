const search = document.querySelector('.form-busca')
const result = document.querySelector('.result')

search.addEventListener('submit', handleRequest)

async function handleRequest(event) {
  event.preventDefault();

  let input = document.querySelector('#input-stock').value
  let url = await fetch(`https://cloud.iexapis.com/stable/stock/${encodeURI(input)}/quote?token=sk_3ac791193ee640778120e25800c3573f`)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      if (json.cod === 200) {
        return data({
          company: json.companyName,
          volume: json.avgTotalVolume,
          price: json.latestPrice,
          latestAt: json.latestTime
        })
      } else {
        alert('Digite um valor valido')
      }
    })
}

function data(json) {
  result.style.display = 'block';
  let company = result.querySelector('.company').innerHTML = `${json.company}`
  let price = result.querySelector('.price').innerHTML = `${json.price}`
  let volume = result.querySelector('.volume').innerHTML = `${json.volume}`
  let latestAt = result.querySelector('.update').innerHTML = `${json.latestAt}`
}