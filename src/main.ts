import { Bot } from 'grammy'
import 'dotenv/config'

const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN)

bot.command('start', ctx => ctx.reply('Welcome! Up and running.'))
bot.on('message', ctx => ctx.reply('Got another message!'))

export default bot
