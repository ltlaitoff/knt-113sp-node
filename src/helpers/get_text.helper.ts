export function getText(text: string, variable: string, type = 'default') {
	if (variable == null || variable === '') {
		return ''
	}

	const varText = type !== 'link' ? variable : `<a href="${variable}">link</a>`

	return `${text}: ${varText}\n`
}
