import { data } from './data'

const LINK_TO_REP = 'https://github.com/ltlaitoff/ktnsp_bot'

const lessonTimes = [
	['08:30', '09:50'],
	['10:05', '11:25'],
	['11:55', '13:15'],
	['13:25', '14:45'],
	['14:55', '16:15'],
	['16:45', '18:05'],
	['18:15', '19:35'],
	['19:45', '21:05']
]

const DAY_NAMES = [
	'Понеділок',
	'Вівторок',
	'Середа',
	'Четвер',
	"П'ятниця",
	'Субота'
]

const TIMER_DELAY = 20
const TIMER_LONG_DELAY = 330

export {
	data,
	LINK_TO_REP,
	lessonTimes,
	DAY_NAMES,
	TIMER_DELAY,
	TIMER_LONG_DELAY
}
