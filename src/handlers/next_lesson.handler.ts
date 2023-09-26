import { Composer } from 'grammy'
import { nextLessonController } from '../controllers/next_lesson.controller'

const nextLessonComposer = new Composer()

nextLessonComposer.command('next_lesson', ctx => {
	ctx.reply(nextLessonController(), {
		disable_web_page_preview: true
	})
})

export { nextLessonComposer }
