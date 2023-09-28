import { ParseModeFlavor } from '@grammyjs/parse-mode'
import { Bot, Context, Api, RawApi } from 'grammy'

export async function setBotCommands(
	bot: Bot<ParseModeFlavor<Context>, Api<RawApi>>
) {
	await bot.api.setMyCommands([
		{ command: 'start', description: 'Запустити бота' },
		{ command: 'help', description: 'Показати справку' },
		{ command: 'next_lesson', description: 'Наступна пара сьогодні' },
		{ command: 'daily_schedule', description: 'Пари на день' },
		{
			command: 'daily_schedule_detailed',
			description: 'Пари на день детально'
		},
		{ command: 'week_schedule', description: 'Розклад на тиждень' },
		{
			command: 'next_week_schedule',
			description: 'Розклад на наступний тиждень'
		},
		{ command: 'get_all', description: 'Показати всю інформацію' }
	])
}
