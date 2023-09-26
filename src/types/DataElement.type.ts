import { LessonType } from './LessonType.type'

export interface DataElement {
	day_of_the_week: number
	period: number
	type_lesson: string
	subject: string
	teacher: string
	meeting_link: string
	zoom_code: string
	zoom_password: string
	link_to_platform: string
	email: string
	telegram: string
	additional_text: string
	type: LessonType
}
