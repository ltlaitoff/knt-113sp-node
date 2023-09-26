import { LessonType } from 'src/types/LessonType.type'
import { getCurrentWeekType } from './get_current_week_type.helper'

export function checkLessonOnWeekNotCompatibility(
	lessonType: LessonType,
	subject: string,
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
