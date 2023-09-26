import { checkWeekDayInData } from '../helpers/check_week_day_in_data.helper'
import { getCurrentWeekDay } from '../helpers/get_current_week_day.helper'
import { getLessonTypeText } from '../helpers/get_lesson_type_text.helper'
import { getPairsByWeekDay } from '../helpers/get_pairs_by_week_day.helper'

export function dailyScheduleController(detailed = false) {
	const week_day = getCurrentWeekDay()

	if (checkWeekDayInData(week_day)) {
		return 'Пар немає'
	}

	return (
		'Розклад на сьогодні (' +
		getLessonTypeText() +
		'):\n' +
		getPairsByWeekDay(week_day, false, detailed)
	)
}
