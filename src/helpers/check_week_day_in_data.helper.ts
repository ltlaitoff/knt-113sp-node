import { data } from '../config'

export function checkWeekDayInData(week_day: number) {
	const days = data.map(item => item.day_of_the_week)

	return !(week_day in days)
}
