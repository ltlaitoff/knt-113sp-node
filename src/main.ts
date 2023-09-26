import { Bot, Context } from 'grammy'
import 'dotenv/config'
import {
	basicComposer,
	dailyScheduleComposer,
	getAllComposer,
	nextLessonComposer,
	nextWeekScheduleComposer,
	weekScheduleComposer
} from './handlers'

import { hydrateReply, parseMode } from '@grammyjs/parse-mode'
import type { ParseModeFlavor } from '@grammyjs/parse-mode'

const bot = new Bot<ParseModeFlavor<Context>>(process.env.TELEGRAM_BOT_TOKEN)

bot.use(hydrateReply)

// Встановлюємо типовий режим форматування для `ctx.reply`
bot.api.config.use(parseMode('HTML'))

bot.use(basicComposer)
bot.use(dailyScheduleComposer)
bot.use(getAllComposer)
bot.use(nextLessonComposer)
bot.use(nextWeekScheduleComposer)
bot.use(weekScheduleComposer)

// bot.command('start', ctx => ctx.reply('Welcome! Up and running.'))
// bot.on('message', ctx => ctx.reply('Got another message!'))

export default bot
