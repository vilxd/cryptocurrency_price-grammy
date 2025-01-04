const { Bot } = require("grammy");
const { menu } = require("./menu");

const bot = new Bot(""); // <-- put your bot token between the "" (https://t.me/BotFather)
bot.use(menu)
bot.on("message", (ctx) => ctx.reply("Select option:", {reply_markup: menu}));

bot.start();