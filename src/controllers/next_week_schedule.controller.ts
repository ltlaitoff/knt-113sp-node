import { DAY_NAMES } from '../config'
import { getLessonTypeText } from '../helpers/get_lesson_type_text.helper'
import { getPairsByWeekDay } from '../helpers/get_pairs_by_week_day.helper'

export function nextWeekScheduleController() {
	const weekText = `Розклад на наступний тиждень(${getLessonTypeText(
		true
	)}):\n\n`

	let scheduleText = ''

	for (let day = 1; day <= 6; day++) {
		scheduleText += `${DAY_NAMES[day - 1]}:\n${getPairsByWeekDay(day, true)}\n`
	}

	return weekText + scheduleText
}
