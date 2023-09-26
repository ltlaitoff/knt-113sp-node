import { Composer } from 'grammy'
import { getAllController } from '../controllers/get_all.controller'

const getAllComposer = new Composer()

getAllComposer.command('get_all', ctx => {
	ctx.reply(getAllController(), {
		disable_web_page_preview: true
	})
})

export { getAllComposer }
