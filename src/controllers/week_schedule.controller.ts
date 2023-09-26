import { DAY_NAMES } from '../config'
import { getLessonTypeText } from '../helpers/get_lesson_type_text.helper'
import { getPairsByWeekDay } from '../helpers/get_pairs_by_week_day.helper'

export function weekScheduleController() {
	const weekText = `Розклад на цей тиждень(${getLessonTypeText()}):\n\n`

	let scheduleText = ''

	for (let day = 1; day <= 6; day++) {
		scheduleText += `${DAY_NAMES[day - 1]}:\n${getPairsByWeekDay(day)}\n`
	}

	return weekText + scheduleText
}
