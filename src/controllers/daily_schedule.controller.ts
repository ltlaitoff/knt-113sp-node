import { checkWeekDayInData } from '../helpers/check_week_day_in_data.helper'
import { getCurrentWeekDay } from '../helpers/get_current_week_day.helper'
import { getLessonTypeText } from '../helpers/get_lesson_type_text.helper'
import { getPairsByWeekDay } from '../helpers/get_pairs_by_week_day.helper'

export function dailyScheduleController(detailed = false, next = false) {
	const baseWeekDay = getCurrentWeekDay()
	const weekDay = baseWeekDay + (next ? 1 : 0)
	const nextWeek = next && baseWeekDay === 0

	if (checkWeekDayInData(weekDay)) {
		return 'Пар немає'
	}

	return (
		`Розклад на ${next ? 'завтра' : 'сьогодні'} (` +
		getLessonTypeText(nextWeek) +
		'):\n' +
		getPairsByWeekDay(weekDay, nextWeek, detailed)
	)
}
