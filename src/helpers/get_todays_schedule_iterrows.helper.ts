import { data } from '../config'

export function getTodaysSchedule(week_day: number) {
	return data.filter(item => item.day_of_the_week === week_day)
}
