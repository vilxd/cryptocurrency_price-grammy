const { Menu } = require("@grammyjs/menu");
const { getPriceFromUrl, BTCurl, ETHurl, BNBurl } = require("./cryptoGetHandler");

const menu = new Menu("cryptocurrency")
  .text("Get current price of BTC", async (ctx) => {
    const data = await getPriceFromUrl(BTCurl)
    ctx.reply(data + "$")
  }).row()

  .text("Get current price of ETH", async (ctx) => {
    const data = await getPriceFromUrl(ETHurl)
    ctx.reply(data + "$")
  })

  .text("Get current price of BNB", async (ctx) => {
    const data = await getPriceFromUrl(BNBurl)
    ctx.reply(data + "$")
  }).row()


module.exports = {
    menu
}