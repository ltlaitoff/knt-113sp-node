import { Composer } from 'grammy'
import { LINK_TO_REP } from '../config'

const basicComposer = new Composer()

basicComposer.command('start', ctx => {
	const text =
		'Привіт! Я бот групи КНТ-113сп для розкладу занять\n' +
		'Переглянути всі команди: /help'

	ctx.reply(text, {
		disable_web_page_preview: true
	})
})

basicComposer.command('help', ctx => {
	const text =
		'Всі команди:\n' +
		'/next_lesson - Наступна пара\n' +
		'/daily_schedule - Всі пари на день\n' +
		'/daily_schedule_detailed - Пари на день детально\n' +
		'/week_schedule - Всі пари на тиждень\n' +
		'/next_week_schedule - Всі пари на наступний тиждень\n' +
		'/get_all - Вся інформація про викладачів та предмети\n' +
		`\nRepository - <a href="${LINK_TO_REP}">link</a>`

	ctx.reply(text, {
		disable_web_page_preview: true
	})
})

export { basicComposer }
