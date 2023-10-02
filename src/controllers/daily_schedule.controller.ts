import { checkWeekDayInData } from '../helpers/check_week_day_in_data.helper'
import { getLessonTypeText } from '../helpers/get_lesson_type_text.helper'
import { getPairsByWeekDay } from '../helpers/get_pairs_by_week_day.helper'

export function dailyScheduleController(detailed = false, next = false) {
	const nowDate = new Date()

	const baseWeekDay = nowDate.getDay()

	nowDate.setDate(nowDate.getDate() + (next ? 1 : 0))
	const weekDay = nowDate.getDay()
	const nextWeek = next && baseWeekDay === 0

	if (checkWeekDayInData(weekDay)) {
		return 'Пар немає'
	}

	const dateString = nowDate.toLocaleDateString('en-GB')

	return (
		`Розклад на ${next ? 'завтра' : 'сьогодні'} (${dateString}), ` +
		getLessonTypeText(nextWeek) +
		':\n' +
		getPairsByWeekDay(weekDay, nextWeek, detailed)
	)
}
