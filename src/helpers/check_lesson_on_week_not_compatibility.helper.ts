import { getCurrentWeekType } from './get_current_week_type.helper'

export function checkLessonOnWeekNotCompatibility(
	lessonType: any,
	subject: any,
	next = false
) {
	let currentWeekType = getCurrentWeekType()

	if (next == true) {
		currentWeekType = !currentWeekType
	}

	const first =
		!currentWeekType && lessonType.includes('З') && !lessonType.includes('Ч')

	const second =
		currentWeekType && lessonType.includes('Ч') && !lessonType.includes('З')

	const third = subject === undefined || subject === null

	return first || second || third
}
