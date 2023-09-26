import { getCurrentWeekType } from './get_current_week_type.helper'

export function getLessonTypeText(next = false) {
	let currentWeekType = getCurrentWeekType()

	if (next === true) {
		currentWeekType = !currentWeekType
	}

	return currentWeekType ? 'Знаменник' : 'Чисельник'
}
