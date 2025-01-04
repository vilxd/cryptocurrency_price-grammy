const BTCurl = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD"
const ETHurl = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"
const BNBurl = "https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=USD"

const getPriceFromUrl = async (url = '') => {
    try{
        const req = await fetch(url)
        const data = await req.json()
        return data.USD
    }
    catch{
        return "ERROR WITH SERVICE"
    }

}

module.exports = {
    getPriceFromUrl,
    BTCurl, ETHurl, BNBurl
}