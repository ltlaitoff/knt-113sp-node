export function getCurrentWeekType() {
	const startDate = new Date(2023, 8, 4)
	const today = new Date()

	const delta = Math.floor(
		(today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
	)

	const daysPassed = delta
	const weekNumber = Math.floor(daysPassed / 7)
	return weekNumber % 2 === 0
}
