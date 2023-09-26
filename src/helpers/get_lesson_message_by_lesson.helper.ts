import { getLessonMessage } from './get_lesson_message.helper'

export function getLessonMessageByLesson(
	timeStart: any,
	timeEnd: any,
	lesson: any,
	customSubjectName: any
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
