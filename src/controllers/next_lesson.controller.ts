import { checkWeekDayInData } from '../helpers/check_week_day_in_data.helper'
import { getTodaysSchedule } from '../helpers/get_todays_schedule_iterrows.helper'
import { getCurrentWeekDay } from '../helpers/get_current_week_day.helper'
import { checkLessonOnWeekNotCompatibility } from '../helpers/check_lesson_on_week_not_compatibility.helper'
import { lessonTimes } from '../config'
import { getLessonMessageByLesson } from '../helpers/get_lesson_message_by_lesson.helper'

export function nextLessonController() {
	const now = new Date()
	const currentYear = now.getFullYear()
	const currentMonth = now.getMonth() + 1
	const currentDay = now.getDate()

	const weekDay = getCurrentWeekDay()
	let pairNow = false

	if (checkWeekDayInData(weekDay)) {
		return 'Сьогодні неділя! Пар нема! 🏳️‍🌈'
	}

	const todaysSchedule = getTodaysSchedule(weekDay)
	let lesson: any = null

	let timeStart
	let timeEnd

	for (const row of todaysSchedule) {
		if (lesson !== null) {
			break
		}

		const period = row['period']
		const lessonType = row['type']

		if (checkLessonOnWeekNotCompatibility(lessonType, row['subject'])) {
			continue
		}

		;[timeStart, timeEnd] = lessonTimes[period - 1]

		const startDatetime = new Date(
			currentYear,
			currentMonth - 1,
			currentDay,
			...timeStart.split(':').map(Number)
		)
		const endDatetime = new Date(
			currentYear,
			currentMonth - 1,
			currentDay,
			...timeEnd.split(':').map(Number)
		)

		if (now >= startDatetime && now <= endDatetime) {
			pairNow = true
			lesson = row
		}

		if (now <= startDatetime) {
			lesson = row
		}
	}

	console.log('%c⧭', 'color: #ff0000', lesson)

	if (lesson !== null && lesson['subject'] !== null) {
		const textForSend = getLessonMessageByLesson(
			timeStart,
			timeEnd,
			lesson,
			'<u><b>Зараз пара</b></u>' + (pairNow ? '🔥' : '🔜')
		)

		return textForSend
	}

	return 'Сьогодні пар більше немає.'
}

// def next_lesson_controller():
//     now = datetime.now()
//     current_year = now.year
//     current_month = now.month
//     current_day = now.day

//     week_day = getCurrentWeekDay()
//     pair_now = False

//     if check_week_day_in_data(week_day):
//         return 'Сьогодні неділя! Пар нема! 🏳️‍🌈'

//     todays_schedule = get_todays_schedule_iterrows(week_day)
//     lesson = None

//     for _, row in todays_schedule:
//         if lesson is not None:
//             break

//         period = row['period']
//         lesson_type = row['type']

//         if (check_lesson_on_week_not_compatibility(
//             lesson_type,
//             row['subject']
//         )):
//             continue

//         time_start, time_end = lesson_times[period - 1]

//         start_datetime = datetime(
//             current_year, current_month, current_day, *map(int, time_start.split(':')))
//         end_datetime = datetime(
//             current_year, current_month, current_day, *map(int, time_end.split(':')))

//         if now >= start_datetime and now <= end_datetime:
//             pair_now = True
//             lesson = row

//         if now <= start_datetime:
//             lesson = row

//     if lesson is not None and pandas.notna(lesson["subject"]):
//         text_for_send = get_lesson_message_by_lesson(
//             time_start,
//             time_end,
//             lesson,
//             '<u><b>Зараз пара</b></u>' if pair_now else 'Наступна пара',
//         )

//         return text_for_send

//     return 'Сьогодні пар більше немає.'
