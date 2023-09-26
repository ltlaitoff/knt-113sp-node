import { getLessonMessage } from './get_lesson_message.helper'
import { DataElement } from 'src/types/DataElement.type'

export function getLessonMessageByLesson(
	timeStart: string,
	timeEnd: string,
	lesson: DataElement,
	customSubjectName: string
) {
	return getLessonMessage(
		timeStart,
		timeEnd,
		lesson.subject,
		lesson.teacher,
		lesson.type_lesson,
		lesson.additional_text,
		lesson.meeting_link,
		lesson.zoom_code,
		lesson.zoom_password,
		lesson.email,
		lesson.telegram,
		customSubjectName
	)
}
