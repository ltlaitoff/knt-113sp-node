import { Api, Bot, Context, RawApi } from 'grammy'
import { check_lesson_switch, data, lessonTimes, TIMER_DELAY } from '../config'
import { checkLessonOnWeekNotCompatibility } from '../helpers/check_lesson_on_week_not_compatibility.helper'
import { getLessonMessageByLesson } from '../helpers/get_lesson_message_by_lesson.helper'
import { ParseModeFlavor } from '@grammyjs/parse-mode'

export async function checkLessons(
	bot: Bot<ParseModeFlavor<Context>, Api<RawApi>>
) {
	await new Promise(resolve => setTimeout(resolve, TIMER_DELAY))

	const now = new Date()
	const weekDay = now.getUTCDay()

	if (check_lesson_switch + 5.1e6 > now.getTime()) {
		return
	}

	if (![1, 2, 3, 4, 5, 6].includes(weekDay)) {
		return
	}

	const todaysSchedule = data.filter(item => item.day_of_the_week === weekDay)
	const currentTime = `${now.getUTCHours().toString().padStart(2, '0')}:${now
		.getUTCMinutes()
		.toString()
		.padStart(2, '0')}`

	for (const row of todaysSchedule) {
		const subject = row.subject
		const period = row.period

		const [timeStart, timeEnd] = lessonTimes[period - 1]

		const timeDifference =
			new Date(`1970-01-01T${timeStart}Z`).getTime() -
			new Date(`1970-01-01T${currentTime}Z`).getTime()

		if (
			timeDifference <= 5 * 60 * 1000 &&
			timeStart > currentTime &&
			!checkLessonOnWeekNotCompatibility(row.type, subject)
		) {
			const timeDiffInMinutes = Math.floor(timeDifference / (60 * 1000))

			const textForSend = getLessonMessageByLesson(
				timeStart,
				timeEnd,
				row,
				`Пара через ${timeDiffInMinutes} хвилин`
			)

			await bot.api.sendMessage(process.env.CHAT_ID || -1, textForSend, {
				parse_mode: 'HTML',
				disable_web_page_preview: true
			})
		}
	}
}
