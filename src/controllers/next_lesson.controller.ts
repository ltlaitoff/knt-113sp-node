import { checkWeekDayInData } from '../helpers/check_week_day_in_data.helper'
import { getTodaysSchedule } from '../helpers/get_todays_schedule_iterrows.helper'
import { getCurrentWeekDay } from '../helpers/get_current_week_day.helper'
import { checkLessonOnWeekNotCompatibility } from '../helpers/check_lesson_on_week_not_compatibility.helper'
import { lessonTimes } from '../config'
import { getLessonMessageByLesson } from '../helpers/get_lesson_message_by_lesson.helper'
import { DataElement } from 'src/types/DataElement.type'

export function nextLessonController() {
	const now = new Date(Date.now())
	const currentYear = now.getFullYear()
	const currentMonth = now.getMonth() + 1
	const currentDay = now.getDate()

	const weekDay = getCurrentWeekDay()
	let pairNow = false

	if (checkWeekDayInData(weekDay)) {
		return 'Сьогодні неділя! Пар нема! 🏳️‍🌈'
	}

	const todaysSchedule = getTodaysSchedule(weekDay)
	let lesson: DataElement | null = null

	let timeStart = '??:??'
	let timeEnd = '??:??'

	for (const row of todaysSchedule) {
		if (lesson !== null) {
			break
		}

		const period = row['period']
		const lessonType = row['type']

		if (checkLessonOnWeekNotCompatibility(lessonType, row['subject'])) {
			continue
		}

		;[timeStart, timeEnd] = lessonTimes[period - 1]

		const startDatetime = new Date(
			currentYear,
			currentMonth - 1,
			currentDay,
			...timeStart.split(':').map(Number)
		)
		const endDatetime = new Date(
			currentYear,
			currentMonth - 1,
			currentDay,
			...timeEnd.split(':').map(Number)
		)

		console.log(
			'startDatetime %c⧭',
			'color: #00e600',
			startDatetime.toLocaleTimeString()
		)
		console.log(
			'endDatetime %c⧭',
			'color: #00a3cc',
			endDatetime.toLocaleTimeString()
		)
		console.log('now %c⧭', 'color: #aa00ff', now.toLocaleTimeString())
		console.log('---')

		if (
			now.getTime() >= startDatetime.getTime() &&
			now.getTime() <= endDatetime.getTime()
		) {
			pairNow = true
			lesson = row
		}

		if (now.getTime() <= startDatetime.getTime()) {
			lesson = row
		}
	}

	if (lesson !== null && lesson['subject'] !== null) {
		const textForSend = getLessonMessageByLesson(
			timeStart,
			timeEnd,
			lesson,
			pairNow ? '<u><b>Зараз пара</b></u>🔥' : 'Наступна пара🔜'
		)

		return textForSend
	}

	return 'Сьогодні пар більше немає.'
}
