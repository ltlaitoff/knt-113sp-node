export function getLessonMessage(
	time_start: any,
	time_end: any,
	subject: any,
	teacher: any,
	type_lesson: any,
	additional_text: any,
	meeting_link: any,
	zoom_code: any,
	zoom_password: any,
	email: any,
	telegram: any,
	custom_subject_name: any
) {
	let text =
		`${custom_subject_name}: "<code>${subject}</code>"\n` +
		`Викладач: <code>${teacher}</code>\n` +
		`Час: ${time_start} - ${time_end}\n`

	if (type_lesson !== null && type_lesson !== '') {
		text += `Тип пари: "<code>${type_lesson}</code>"\n`
	}

	if (additional_text !== null && additional_text !== '') {
		text += `Додадкова інфа: "<code>${additional_text}</code>"\n`
	}

	if (meeting_link !== null && meeting_link !== '') {
		text += `<a href="${meeting_link}">Посилання на зустріч</a>\n`
	}

	if (zoom_code !== null && zoom_code !== '') {
		text += `Ідентифікатор Zoom: ${zoom_code}\n`
	}

	if (zoom_password !== null && zoom_password !== '') {
		text += `Пароль Zoom: ${zoom_password}\n`
	}

	if (email !== null && email !== '') {
		text += `Електронна адреса: ${email}\n`
	}

	if (telegram !== null && telegram !== '') {
		text += `Telegram: ${telegram}\n`
	}

	return text
}
