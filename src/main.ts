import { Bot, Context } from 'grammy'
import { config } from 'dotenv'
import {
	basicComposer,
	dailyScheduleComposer,
	getAllComposer,
	nextLessonComposer,
	weekScheduleComposer
} from './handlers'
import { setBotCommands } from './utils/set-bot-commands.util'
import { hydrateReply, parseMode } from '@grammyjs/parse-mode'
import type { ParseModeFlavor } from '@grammyjs/parse-mode'

const ENV_PATH = process.env.MODE === 'dev' ? '.env.dev' : '.env'
config({ path: ENV_PATH })
process.env.TZ = 'Europe/Kyiv'

const bot = new Bot<ParseModeFlavor<Context>>(process.env.TELEGRAM_BOT_TOKEN)

bot.use(hydrateReply)
bot.api.config.use(parseMode('HTML'))

bot.use(basicComposer)
bot.use(dailyScheduleComposer)
bot.use(getAllComposer)
bot.use(nextLessonComposer)
bot.use(weekScheduleComposer)

setBotCommands(bot)

export default bot
