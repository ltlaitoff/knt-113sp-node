import { DAY_NAMES } from '../config'
import { getLessonTypeText } from '../helpers/get_lesson_type_text.helper'
import { getPairsByWeekDay } from '../helpers/get_pairs_by_week_day.helper'

export function weekScheduleController(next = false) {
	const startWeekDate = new Date()
	const daytoset = next ? 8 : 1

	const currentDay = startWeekDate.getDay()
	const distance = daytoset - currentDay
	startWeekDate.setDate(startWeekDate.getDate() + distance)

	const endWeekDate = new Date()
	endWeekDate.setDate(startWeekDate.getDate() + 6)

	const startWeekDateString = startWeekDate.toLocaleDateString('en-GB')
	const endWeekDateString = endWeekDate.toLocaleDateString('en-GB')

	const weekText = `Розклад на ${
		next ? 'наступний' : 'цей'
	} тиждень(${startWeekDateString} - ${endWeekDateString}) (${getLessonTypeText(
		next
	)}):\n\n`

	let scheduleText = ''

	for (let day = 1; day <= 6; day++) {
		scheduleText += `${DAY_NAMES[day - 1]}:\n${getPairsByWeekDay(
			day,
			next
		)}\n\n`
	}

	return weekText + scheduleText
}
