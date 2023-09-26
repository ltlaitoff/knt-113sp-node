import { data } from '../config'

export function getTodaysSchedule(week_day: any) {
	return data.filter(item => item.day_of_the_week === week_day)
}
