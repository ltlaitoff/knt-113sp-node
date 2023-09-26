import { data } from '../config'

export function checkWeekDayInData(week_day: any) {
	const days = data.map(item => item.day_of_the_week)

	return !(week_day in days)
}
