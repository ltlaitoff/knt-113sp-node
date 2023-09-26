import { Composer } from 'grammy'
import { dailyScheduleController } from '../controllers/daily_schedule.controller'

const dailyScheduleComposer = new Composer()

dailyScheduleComposer.command('daily_schedule', ctx => {
	ctx.reply(dailyScheduleController(), {
		disable_web_page_preview: true
	})
})

dailyScheduleComposer.command('daily_schedule_detailed', ctx => {
	ctx.reply(dailyScheduleController(true), {
		disable_web_page_preview: true
	})
})

export { dailyScheduleComposer }
