import { data } from '../config'
import { getText } from '../helpers/get_text.helper'

export function getAllController() {
	const text: string[] = []

	for (const row of data) {
		const typeLesson = row['type_lesson']
		const subject = row['subject']
		const teacher = row['teacher']
		const meetingLink = row['meeting_link']
		const linkToPlatform = row['link_to_platform']
		const email = row['email']
		const telegram = row['telegram']
		const additionalText = row['additional_text']

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
