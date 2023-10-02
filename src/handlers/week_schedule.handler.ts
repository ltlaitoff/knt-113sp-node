import { Composer } from 'grammy'
import { weekScheduleController } from '../controllers/week_schedule.controller'

const weekScheduleComposer = new Composer()

weekScheduleComposer.command('week_schedule', ctx => {
	ctx.reply(weekScheduleController(), {
		disable_web_page_preview: true
	})
})

weekScheduleComposer.command('next_week_schedule', ctx => {
	ctx.reply(weekScheduleController(true), {
		disable_web_page_preview: true
	})
})

export { weekScheduleComposer }
