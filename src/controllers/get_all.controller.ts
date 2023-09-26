// import pandas
// from src.config import data
import { data } from '../config'

function getText(text: any, variable: any, type = 'default') {
	if (variable === null || variable === undefined) {
		return ''
	}

	const varText = type !== 'link' ? variable : `<a href="${variable}">link</a>`

	return `${text}: ${varText}\n`
}

export function getAllController() {
	const text: any[] = []

	for (const row of data) {
		const dayOfWeek = row['day_of_the_week']
		const period = row['period']
		const typeLesson = row['type_lesson']
		const subject = row['subject']
		const teacher = row['teacher']
		const meetingLink = row['meeting_link']
		const zoomCode = row['zoom_code']
		const zoomPassword = row['zoom_password']
		const linkToPlatform = row['link_to_platform']
		const email = row['email']
		const telegram = row['telegram']
		const additionalText = row['additional_text']
		let type = row['type']

		type = type ? 'Знаменник' : 'Чисельник'

		let smileType = ''

		if (typeLesson == 'ЛК') {
			smileType = '🐦'
		} else if (typeLesson == 'ЛБ') {
			smileType = '🐤'
		} else if (typeLesson == 'ПР') {
			smileType = '🐧'
		} else {
			smileType = '🐔'
		}

		const smile = subject == 'Л-МВ' ? '🧖🏿‍♀️' : subject == 'ВТтаВД' ? '🧖🏻‍♀️' : ''

		text.push(
			`🔔 Subject: ${smileType} ${typeLesson} ${smile} ${subject}\n` +
				getText('👨‍🏫 Teacher', teacher) +
				getText('🔗 Meeting', meetingLink, 'link') +
				getText('🌵 Platform', linkToPlatform, 'link') +
				getText('📧 Email', email) +
				getText('📞 Telegram', telegram) +
				getText('🤘🏿 Additional', additionalText)
		)
	}

	return text.join('-------\n')
}
