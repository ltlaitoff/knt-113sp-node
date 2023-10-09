import { lessonTimes } from '../config'
import { checkLessonOnWeekNotCompatibility } from './check_lesson_on_week_not_compatibility.helper'
import { getTodaysSchedule } from './get_todays_schedule_iterrows.helper'
import { getText } from './get_text.helper'

export function getPairsByWeekDay(
	weekDay: number,
	next = false,
	detailed = false
) {
	const todaysSchedule = getTodaysSchedule(weekDay)
	const text: string[] = []

	for (const row of todaysSchedule) {
		const typeLesson = row['type_lesson']
		const period = row['period']
		const [timeStart, timeEnd] = lessonTimes[period - 1]
		const subject = row['subject']

		if (!typeLesson) {
			continue
		}

		if (checkLessonOnWeekNotCompatibility(row['type'], subject, next)) {
			continue
		}

		const smileType =
			{
				ЛК: '🐦',
				ЛБ: '🐤',
				ПР: '🐧'
			}[typeLesson] || '🐔'

		const smile = subject === 'Л-МВ' ? '🧖🏿‍♀️' : subject === 'ВТтаВД' ? '🧖🏻‍♀️' : ''

		if (detailed) {
			const teacher = row['teacher']
			const meetingLink = row['meeting_link']
			const zoomCode = row['zoom_code']
			const zoomPassword = row['zoom_password']
			const linkToPlatform = row['link_to_platform']
			const email = row['email']
			const telegram = row['telegram']
			const additionalText = row['additional_text']

			text.push(
				`<b>Pair ${period}</b> | ⏳ ${timeStart} - ${timeEnd}:\n` +
					`🔔 Subject: ${smileType} ${typeLesson} ${smile} ${subject}\n` +
					getText('👨‍🏫 Teacher', teacher) +
					getText('🔗 Meeting', meetingLink, 'link') +
					getText('🆔 Zoom code', zoomPassword) +
					getText('🔐 Zoom password', zoomCode) +
					getText('🌵 Platform', linkToPlatform, 'link') +
					getText('📧 Email', email) +
					getText('📞 Telegram', telegram) +
					getText('🤘🏿 Additional', additionalText)
			)
		} else {
			text.push(
				`${period} | ${timeStart} - ${timeEnd}: ${smileType}${typeLesson} ${smile}${subject}`
			)
		}
	}

	if (text.length === 0) {
		return 'Пар немає'
	}

	if (detailed) {
		return text.join('----\n')
	}

	return text.join('\n')
}
