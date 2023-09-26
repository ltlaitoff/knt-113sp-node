import { Composer } from 'grammy'

import { nextWeekScheduleController } from '../controllers/next_week_schedule.controller'

const nextWeekScheduleComposer = new Composer()

nextWeekScheduleComposer.command('next_week_schedule', ctx => {
	ctx.reply(nextWeekScheduleController(), {
		disable_web_page_preview: true
	})
})

export { nextWeekScheduleComposer }
